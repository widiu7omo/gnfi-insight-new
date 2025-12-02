'use client';

import { useEffect, useRef } from "react";

type ChartPoint = {
    year: number;
    value: number;
};

const DATA: ChartPoint[] = [
    { year: 2013, value: 77 },
    { year: 2014, value: 96 },
    { year: 2015, value: 121 },
    { year: 2016, value: 150 },
    { year: 2017, value: 150 },
    { year: 2018, value: 225 },
    { year: 2019, value: 267 },
    { year: 2020, value: 153 },
    { year: 2021, value: 289 },
    { year: 2022, value: 200 },
    { year: 2023, value: 213 },
    { year: 2024, value: 272 },
    { year: 2025, value: 514 },
];

const BACKGROUND_COLOR = "#24140e";
const AXIS_COLOR = "#f5f0eb";
const AREA_GRADIENT_TOP = "#f4d595";
const AREA_GRADIENT_BOTTOM = "#d08104";
const POINT_COLOR = "#ff7a00";
const LATEST_POINT_IMAGE_SRC = "/assets/menjaga-warisan-budaya-takbenda-melestarikan-kekayaan-indonesia/2.5.png";

const ChartWBTBI = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) {
            return;
        }

        let latestPointImage: HTMLImageElement | null = null;
        let isLatestPointImageLoaded = false;
        let animationFrameId = 0;
        let startTime: number | null = null;
        let latestProgress = 0;
        let isMounted = true;

        const draw = (progressRatio: number) => {
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                return;
            }

            const dpr = window.devicePixelRatio || 1;
            const width = container.clientWidth;
            const height = Math.max(360, Math.round(width * 0.55));

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const isCompact = width < 720;
            const isMobile = width < 540;

            const margin = {
                top: 80,
                right: 80,
                bottom: 80,
                left: 80,
            };



            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(0, 0, width, height);

            const chartWidth = width - margin.left - margin.right;
            const chartHeight = height - margin.top - margin.bottom;
            const maxValue = Math.max(...DATA.map((d) => d.value)) * 1.1;

            if (chartWidth <= 0 || chartHeight <= 0) {
                return;
            }

            const getX = (index: number) =>
                margin.left +
                (index / (DATA.length - 1 || 1)) * Math.max(chartWidth, 1);

            const getY = (value: number) =>
                margin.top + chartHeight - (value / maxValue) * chartHeight;

            const yearSpacing = chartWidth / Math.max(DATA.length - 1, 1);
            const needsYearRotation = isMobile && yearSpacing < 70;
            const yearFontSize = needsYearRotation
                ? isMobile
                    ? 12
                    : 14
                : isMobile
                    ? 13
                    : 16;
            const labelFontSize = isMobile ? 16 : 20;

            const gridValues = [400, 200];
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
            ctx.lineWidth = 1;
            gridValues.forEach((value) => {
                if (value > maxValue || value < 0) {
                    return;
                }
                const y = getY(value);
                ctx.beginPath();
                ctx.moveTo(margin.left, y);
                ctx.lineTo(width - margin.right, y);
                ctx.stroke();
            });

            const gradient = ctx.createLinearGradient(
                0,
                margin.top,
                0,
                margin.top + chartHeight,
            );
            gradient.addColorStop(0, AREA_GRADIENT_TOP);
            gradient.addColorStop(1, AREA_GRADIENT_BOTTOM);

            const totalSegments = Math.max(DATA.length - 1, 1);
            const clampedProgress = Math.min(Math.max(progressRatio, 0), 1);
            const scaledProgress = clampedProgress * totalSegments;
            const fullIndex = Math.floor(scaledProgress);
            const segmentFraction = scaledProgress - fullIndex;

            const pathPoints: { x: number; y: number }[] = [];

            DATA.forEach((point, index) => {
                const x = getX(index);
                const y = getY(point.value);
                if (index <= fullIndex) {
                    pathPoints.push({ x, y });
                }
            });

            if (fullIndex < DATA.length - 1) {
                const current = DATA[fullIndex];
                const next = DATA[fullIndex + 1];
                const xCurrent = getX(fullIndex);
                const yCurrent = getY(current.value);
                const xNext = getX(fullIndex + 1);
                const yNext = getY(next.value);
                const partialX = xCurrent + (xNext - xCurrent) * segmentFraction;
                const partialY = yCurrent + (yNext - yCurrent) * segmentFraction;
                pathPoints.push({ x: partialX, y: partialY });
            }

            if (pathPoints.length > 0) {
                ctx.beginPath();
                ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
                for (let i = 1; i < pathPoints.length; i += 1) {
                    ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
                }
                ctx.lineTo(pathPoints[pathPoints.length - 1].x, margin.top + chartHeight);
                ctx.lineTo(margin.left, margin.top + chartHeight);
                ctx.closePath();
                ctx.fillStyle = gradient;
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(pathPoints[0].x, pathPoints[0].y);
                for (let i = 1; i < pathPoints.length; i += 1) {
                    ctx.lineTo(pathPoints[i].x, pathPoints[i].y);
                }
                ctx.strokeStyle = "#f7dfcd";
                ctx.lineWidth = 3;
                ctx.stroke();
            }

            ctx.fillStyle = POINT_COLOR;
            DATA.forEach((point, index) => {
                const x = getX(index);
                const y = getY(point.value);

                if (index !== 0 && clampedProgress < index / totalSegments) {
                    return;
                }

                const pointProgress =
                    index === 0
                        ? 1
                        : Math.min(Math.max(scaledProgress - (index - 1), 0), 1);
                const baseRadius = index === DATA.length - 1 ? (isMobile ? 14 : 18) : 8;
                const radius = baseRadius * Math.max(pointProgress, 0);

                if (radius > 0) {
                    const pointAlpha = index === 0 ? 1 : Math.min(pointProgress, 1);
                    ctx.beginPath();
                    ctx.globalAlpha = pointAlpha;
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fill();

                    if (
                        index === DATA.length - 1 &&
                        latestPointImage &&
                        isLatestPointImageLoaded
                    ) {
                        const imageSize = radius * 1.3;
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(x, y, radius, 0, Math.PI * 2);
                        ctx.clip();
                        ctx.drawImage(
                            latestPointImage,
                            x - imageSize / 2,
                            y - imageSize / 2,
                            imageSize,
                            imageSize,
                        );
                        ctx.restore();

                        ctx.beginPath();
                        ctx.arc(x, y, radius, 0, Math.PI * 2);
                        ctx.strokeStyle = "#ffffff";
                        ctx.lineWidth = isMobile ? 2 : 2.5;
                        ctx.stroke();
                    }

                    ctx.globalAlpha = 1;
                }

                const shouldShowValueLabel = !isMobile || index === DATA.length - 1;
                if (shouldShowValueLabel) {
                    const valueFontSize =
                        index === DATA.length - 1
                            ? labelFontSize + (isMobile ? 8 : 12)
                            : labelFontSize;
                    const valueFontWeight = index === DATA.length - 1 ? 700 : 600;
                    ctx.fillStyle = "#ffffff";
                    ctx.font = `${valueFontWeight} ${valueFontSize}px 'Inter', 'Helvetica Neue', Arial, sans-serif`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "bottom";
                    ctx.globalAlpha = index === 0 ? 1 : Math.min(pointProgress, 1);
                    ctx.fillText(String(point.value), x, y - 14);
                    ctx.globalAlpha = 1;
                }
                ctx.fillStyle = POINT_COLOR;
            });

            ctx.strokeStyle = AXIS_COLOR;
            ctx.lineWidth = 2;
            const baselineY = margin.top + chartHeight;
            ctx.beginPath();
            ctx.moveTo(margin.left, baselineY);
            ctx.lineTo(width - margin.right + 20, baselineY);
            ctx.stroke();

            ctx.fillStyle = "#f7dfcd";
            DATA.forEach((point, index) => {
                const x = getX(index);
                ctx.save();
                ctx.translate(x, baselineY + 12);
                if (needsYearRotation) {
                    ctx.rotate((-35 * Math.PI) / 180);
                    ctx.textAlign = "left";
                    ctx.textBaseline = "top";
                } else {
                    ctx.textAlign = "center";
                    ctx.textBaseline = "top";
                }

                if (index === DATA.length - 1) {
                    const accentFontSize = yearFontSize + (isCompact ? 6 : 10);
                    ctx.font = `700 ${accentFontSize}px 'Inter', 'Helvetica Neue', Arial, sans-serif`;
                    ctx.fillStyle = "#ffffff";
                } else {
                    ctx.font = `500 ${yearFontSize}px 'Inter', 'Helvetica Neue', Arial, sans-serif`;
                    ctx.fillStyle = "#f7dfcd";
                }

                ctx.fillText(String(point.year), 0, 0);
                ctx.restore();
            });

            ctx.textAlign = "left";
            ctx.textBaseline = "bottom";
            ctx.font = `400 ${isMobile ? 14 : 18}px 'Inter', 'Helvetica Neue', Arial, sans-serif`;
            ctx.fillText("Penetapan WBTbI", margin.left - 60, margin.top + 40);

            ctx.save();


            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = `500 ${isMobile ? 14 : 18}px 'Inter', 'Helvetica Neue', Arial, sans-serif`;
            ctx.fillStyle = "#d4c3b8";
            [400, 200].forEach((value) => {
                if (value > maxValue || value < 0) {
                    return;
                }
                const y = getY(value);
                ctx.fillText(String(value), margin.left - 50, y);
            });

            const summaryX = width - margin.right + 30;
            const summaryY = margin.top - 60;

            ctx.fillStyle = "#d4c3b8";
            ctx.font = `400 ${isCompact ? 14 : 18}px 'Inter', 'Helvetica Neue', Arial, sans-serif`;
            ctx.textAlign = "right";
            ctx.textBaseline = "top";
            ctx.fillText("Jumlah WBTbI", summaryX + 40, summaryY);



            // const circleX = summaryX + 50;
            // const circleY = summaryY + 110;
            // const circleRadius = 34;

            // const circleGradient = ctx.createLinearGradient(
            //     circleX,
            //     circleY - circleRadius,
            //     circleX,
            //     circleY + circleRadius,
            // );
            // circleGradient.addColorStop(0, "#ff8f3a");
            // circleGradient.addColorStop(1, "#f55b0a");

            // ctx.beginPath();
            // ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
            // ctx.fillStyle = circleGradient;
            // ctx.fill();

            // ctx.font = `600 ${isCompact ? 14 : 16}px 'Inter', 'Helvetica Neue', Arial, sans-serif`;
            // ctx.fillStyle = "#1f120b";
            // ctx.textAlign = "center";
            // ctx.textBaseline = "middle";
            // ctx.fillText("ART", circleX, circleY);
        };

        const ensureLatestPointImage = () => {
            if (latestPointImage || typeof window === "undefined") {
                return;
            }

            const image = new window.Image();
            image.width = 40;
            image.height = 40;
            image.src = LATEST_POINT_IMAGE_SRC;
            latestPointImage = image;

            if (image.complete) {
                isLatestPointImageLoaded = true;
                draw(latestProgress || 1);
                return;
            }

            image.onload = () => {
                if (!isMounted) {
                    return;
                }
                isLatestPointImageLoaded = true;
                draw(latestProgress || 1);
            };
        };

        const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
        const duration = 1600;

        const tick = (timestamp: number) => {
            if (startTime === null) {
                startTime = timestamp;
            }
            const rawProgress = Math.min((timestamp - startTime) / duration, 1);
            latestProgress = easeOutCubic(rawProgress);
            draw(latestProgress);
            if (rawProgress < 1) {
                animationFrameId = window.requestAnimationFrame(tick);
            }
        };

        ensureLatestPointImage();
        draw(0);
        animationFrameId = window.requestAnimationFrame(tick);

        const handleResize = () => {
            draw(latestProgress || 1);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            isMounted = false;
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
            window.removeEventListener("resize", handleResize);
            if (latestPointImage) {
                latestPointImage.onload = null;
                latestPointImage = null;
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                maxWidth: 960,
                margin: "0 auto",
                position: "relative",
            }}
        >
            <canvas ref={canvasRef} />
        </div>
    );
};

export default ChartWBTBI;
