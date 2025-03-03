"use client";

import { baseUrl } from "@/constants/meta";
import { motion, type Variants, MotionConfig, useInView } from "framer-motion";
import NumberFlow, { useCanAnimate } from '@number-flow/react'
import { useEffect, useRef, useState } from "react";
const MotionNumberFlow = motion(NumberFlow)
export function CustomImageA() {

  const TrashGreen = () => {
    return <motion.svg initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0, duration: .4 }} viewport={{ once: true }}
      className="w-full lg:w-[197px]" viewBox="0 0 197 423" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path d="M28.3 385.3H34.4V383.7H28.3V385.3Z" fill="#2B201F" />
      <path d="M28.3 422.3H34.4V420.7H28.3V422.3Z" fill="#2B201F" />
      <path d="M22 403C22 413.7 27.4 422.3 34 422.3C40.6 422.3 46 413.7 46 403C46 392.4 40.6 383.8 34 383.8C27.4 383.8 22 392.4 22 403Z" fill="#2B201F" />
      <path d="M16.4 403C16.4 413.7 21.7 422.3 28.3 422.3C34.9 422.3 40.3 413.7 40.3 403C40.3 392.4 34.9 383.8 28.3 383.8C21.7 383.8 16.4 392.4 16.4 403Z" fill="#473A37" />
      <path d="M18.1 402.7C18.1 411.8 22.7 419.1 28.3 419.1C34 419.1 38.5 411.8 38.5 402.7C38.5 393.7 34 386.4 28.3 386.4C22.7 386.4 18.1 393.7 18.1 402.7Z" fill="#568469" />
      <path d="M21 395.2C21 398.6 22.7 401.4 24.8 401.4C26.9 401.4 28.6 398.6 28.6 395.2C28.6 391.8 26.9 389.1 24.8 389.1C22.7 389.1 21 391.8 21 395.2Z" fill="#B7B334" />
      <path d="M88.3 385.3H94.4V383.7H88.3V385.3Z" fill="#2B201F" />
      <path d="M88.3 422.3H94.4V420.7H88.3V422.3Z" fill="#2B201F" />
      <path d="M82 403C82 413.7 87.4 422.3 94 422.3C100.6 422.3 106 413.7 106 403C106 392.4 100.6 383.8 94 383.8C87.4 383.8 82 392.4 82 403Z" fill="#2B201F" />
      <path d="M76.4 403C76.4 413.7 81.7 422.3 88.3 422.3C95 422.3 100.3 413.7 100.3 403C100.3 392.4 95 383.8 88.3 383.8C81.7 383.8 76.4 392.4 76.4 403Z" fill="#473A37" />
      <path d="M78.1 402.7C78.1 411.8 82.7 419.1 88.3 419.1C94 419.1 98.5 411.8 98.5 402.7C98.5 393.7 94 386.4 88.3 386.4C82.7 386.4 78.1 393.7 78.1 402.7Z" fill="#568469" />
      <path d="M81 395.2C81 398.6 82.7 401.4 84.8 401.4C86.9 401.4 88.6 398.6 88.6 395.2C88.6 391.8 86.9 389.1 84.8 389.1C82.7 389.1 81 391.8 81 395.2Z" fill="#B7B334" />
      <path d="M159.2 385.3H165.3V383.7H159.2V385.3Z" fill="#2B201F" />
      <path d="M159.2 422.3H165.3V420.7H159.2V422.3Z" fill="#2B201F" />
      <path d="M152.9 403C152.9 413.7 158.2 422.3 164.9 422.3C171.5 422.3 176.8 413.7 176.8 403C176.8 392.4 171.5 383.8 164.9 383.8C158.2 383.8 152.9 392.4 152.9 403Z" fill="#2B201F" />
      <path d="M147.2 403C147.2 413.7 152.6 422.3 159.2 422.3C165.8 422.3 171.2 413.7 171.2 403C171.2 392.4 165.8 383.8 159.2 383.8C152.6 383.8 147.2 392.4 147.2 403Z" fill="#473A37" />
      <path d="M149 402.7C149 411.8 153.6 419.1 159.2 419.1C164.8 419.1 169.4 411.8 169.4 402.7C169.4 393.7 164.8 386.4 159.2 386.4C153.6 386.4 149 393.7 149 402.7Z" fill="#568469" />
      <path d="M151.9 395.2C151.9 398.6 153.6 401.4 155.7 401.4C157.8 401.4 159.5 398.6 159.5 395.2C159.5 391.8 157.8 389.1 155.7 389.1C153.6 389.1 151.9 391.8 151.9 395.2Z" fill="#B7B334" />
      <path d="M10.9 9C10.7 9.6 10.6 10.2333 10.6 10.9V398.3C10.6 403.9 15.2 408.5 20.8 408.5H176.5C182.1 408.5 186.7 403.9 186.7 398.3V10.9C186.7 10.2333 186.633 9.6 186.5 9H10.9Z" fill="#568469" />
      <path d="M114.4 9H62.5H59H10.7C10.5667 9.6 10.5 10.2333 10.5 10.9V398.3C10.5 403.9 15.1 408.5 20.7 408.5H59H62.5H104.4C110 408.5 114.6 403.9 114.6 398.3V10.9C114.6 10.3 114.5 9.6 114.4 9Z" fill="#5C9B7B" />
      <path d="M95 0.400002H5.6C2.6 0.400002 0.199997 2.9 0.199997 5.8C0.199997 8.8 2.6 11.2 5.6 11.2H95V0.400002Z" fill="#568469" />
      <path d="M190.8 0.400002H82.2V11.2H190.8C193.8 11.2 196.2 8.8 196.2 5.8C196.2 2.9 193.8 0.400002 190.8 0.400002Z" fill="#568469" />
      <path d="M66 382.1C66 382.9 65.3 383.6 64.4 383.6H22.5C21.6 383.6 20.9 382.9 20.9 382.1C20.9 381.2 21.6 380.5 22.5 380.5H64.4C65.3 380.5 66 381.2 66 382.1Z" fill="#568469" />
      <path d="M66 386.7C66 387.6 65.3 388.3 64.4 388.3H22.5C21.6 388.3 20.9 387.6 20.9 386.7C20.9 385.9 21.6 385.2 22.5 385.2H64.4C65.3 385.2 66 385.9 66 386.7Z" fill="#568469" />
      <path d="M66 391.4C66 392.3 65.3 393 64.4 393H22.5C21.6 393 20.9 392.3 20.9 391.4C20.9 390.6 21.6 389.9 22.5 389.9H64.4C65.3 389.9 66 390.6 66 391.4Z" fill="#568469" />
      <path d="M47.1 394.8H35.6H33H22.5C21.6 394.8 20.9 395.5 20.9 396.4C20.9 397.2 21.6 397.9 22.5 397.9H33H35.6H47.1C48 397.9 48.7 397.2 48.7 396.4C48.7 395.5 48 394.8 47.1 394.8Z" fill="#568469" />
      <path d="M174.4 64.4L155.2 32.2C153.3 29.2 149.4 28.2 146.4 30C143.4 31.8 142.4 35.7 144.2 38.8L157.8 61.5L140.3 61.2L143.7 55.9L144.3 55.1C144.6 54.5 145.3 54.4 145.8 54.7L146.4 55C146.9 55.4 147.2 55.1 147.1 54.5L144.7 43.8C144.5 43.2 143.9 42.8 143.3 42.9L132.7 45.6C132.1 45.7 132.1 46.1 132.6 46.4L133.1 46.8C133.5 47 133.7 47.6 133.6 48L123.6 63.8C121.7 66.8 122.6 70.7 125.6 72.6C126.6 73.2 127.6 73.5 128.7 73.6C129.3 73.8 129.9 73.9 130.5 73.9L168.1 74.5C169.233 74.4333 170.267 74.1667 171.2 73.7C171.533 73.5667 171.867 73.4 172.2 73.2C175.2 71.4 176.2 67.4 174.4 64.4Z" fill="white" />
    </motion.svg>
  }
  const TrashYellow = () => {
    return <motion.svg initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: .4 }} viewport={{ once: true }}
      className="w-full lg:w-[197px]" viewBox="0 0 197 348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.4 310.3H34.4V308.7H28.4V310.3Z" fill="#2B201F" />
      <path d="M28.4 347.3H34.4V345.7H28.4V347.3Z" fill="#2B201F" />
      <path d="M22.1 328C22.1 338.7 27.4 347.3 34 347.3C40.7 347.3 46 338.7 46 328C46 317.4 40.7 308.8 34 308.8C27.4 308.8 22.1 317.4 22.1 328Z" fill="#2B201F" />
      <path d="M16.4 328C16.4 338.7 21.8 347.3 28.4 347.3C35 347.3 40.4 338.7 40.4 328C40.4 317.4 35 308.8 28.4 308.8C21.8 308.8 16.4 317.4 16.4 328Z" fill="#473A37" />
      <path d="M18.2 327.7C18.2 336.8 22.8 344.1 28.4 344.1C34 344.1 38.6 336.8 38.6 327.7C38.6 318.7 34 311.4 28.4 311.4C22.8 311.4 18.2 318.7 18.2 327.7Z" fill="#B7B334" />
      <path d="M21.1 320.2C21.1 323.6 22.8 326.4 24.9 326.4C27 326.4 28.7 323.6 28.7 320.2C28.7 316.8 27 314.1 24.9 314.1C22.8 314.1 21.1 316.8 21.1 320.2Z" fill="#B7B334" />
      <path d="M88.4 310.3H94.5V308.7H88.4V310.3Z" fill="#2B201F" />
      <path d="M88.4 347.3H94.5V345.7H88.4V347.3Z" fill="#2B201F" />
      <path d="M82.1 328C82.1 338.7 87.5 347.3 94.1 347.3C100.7 347.3 106 338.7 106 328C106 317.4 100.7 308.8 94.1 308.8C87.5 308.8 82.1 317.4 82.1 328Z" fill="#2B201F" />
      <path d="M76.4 328C76.4 338.7 81.8 347.3 88.4 347.3C95 347.3 100.4 338.7 100.4 328C100.4 317.4 95 308.8 88.4 308.8C81.8 308.8 76.4 317.4 76.4 328Z" fill="#473A37" />
      <path d="M78.2 327.7C78.2 336.8 82.8 344.1 88.4 344.1C94 344.1 98.6 336.8 98.6 327.7C98.6 318.7 94 311.4 88.4 311.4C82.8 311.4 78.2 318.7 78.2 327.7Z" fill="#B7B334" />
      <path d="M81.1 320.2C81.1 323.6 82.8 326.4 84.9 326.4C87 326.4 88.7 323.6 88.7 320.2C88.7 316.8 87 314.1 84.9 314.1C82.8 314.1 81.1 316.8 81.1 320.2Z" fill="#B7B334" />
      <path d="M159.3 310.3H165.3V308.7H159.3V310.3Z" fill="#2B201F" />
      <path d="M159.3 347.3H165.3V345.7H159.3V347.3Z" fill="#2B201F" />
      <path d="M153 328C153 338.7 158.3 347.3 164.9 347.3C171.5 347.3 176.9 338.7 176.9 328C176.9 317.4 171.5 308.8 164.9 308.8C158.3 308.8 153 317.4 153 328Z" fill="#2B201F" />
      <path d="M147.3 328C147.3 338.7 152.7 347.3 159.3 347.3C165.9 347.3 171.2 338.7 171.2 328C171.2 317.4 165.9 308.8 159.3 308.8C152.7 308.8 147.3 317.4 147.3 328Z" fill="#473A37" />
      <path d="M149.1 327.7C149.1 336.8 153.6 344.1 159.3 344.1C164.9 344.1 169.5 336.8 169.5 327.7C169.5 318.7 164.9 311.4 159.3 311.4C153.6 311.4 149.1 318.7 149.1 327.7Z" fill="#B7B334" />
      <path d="M151.9 320.2C151.9 323.6 153.6 326.4 155.7 326.4C157.9 326.4 159.6 323.6 159.6 320.2C159.6 316.8 157.9 314.1 155.7 314.1C153.6 314.1 151.9 316.8 151.9 320.2Z" fill="#B7B334" />
      <path d="M10.9 8.8C10.7667 9.4 10.7 10.0333 10.7 10.7V323.3C10.7 328.9 15.3 333.5 20.9 333.5H176.6C182.2 333.5 186.8 328.9 186.8 323.3V10.7C186.8 10.0333 186.733 9.4 186.6 8.8H10.9Z" fill="#B7B334" />
      <path d="M114.4 8.8H62.5H59.1H10.8C10.6667 9.4 10.6 10.0333 10.6 10.7V323.3C10.6 328.9 15.2 333.5 20.8 333.5H59.1H62.5H104.4C110.1 333.5 114.6 328.9 114.6 323.3V10.7C114.6 10.1 114.6 9.4 114.4 8.8Z" fill="#D6D63A" />
      <path d="M95.1 0.300003H5.60001C2.70001 0.300003 0.299988 2.70001 0.299988 5.60001C0.299988 8.60001 2.70001 11 5.60001 11H95.1V0.300003Z" fill="#B7B334" />
      <path d="M190.9 0.300003H82.3V11H190.9C193.9 11 196.3 8.60001 196.3 5.60001C196.3 2.70001 193.9 0.300003 190.9 0.300003Z" fill="#B7B334" />
      <path d="M66.1 307.1C66.1 307.9 65.4 308.6 64.5 308.6H22.5C21.7 308.6 21 307.9 21 307.1C21 306.2 21.7 305.5 22.5 305.5H64.5C65.4 305.5 66.1 306.2 66.1 307.1Z" fill="#B7B334" />
      <path d="M66.1 311.7C66.1 312.6 65.4 313.3 64.5 313.3H22.5C21.7 313.3 21 312.6 21 311.7C21 310.9 21.7 310.2 22.5 310.2H64.5C65.4 310.2 66.1 310.9 66.1 311.7Z" fill="#B7B334" />
      <path d="M66.1 316.4C66.1 317.3 65.4 318 64.5 318H22.5C21.7 318 21 317.3 21 316.4C21 315.6 21.7 314.9 22.5 314.9H64.5C65.4 314.9 66.1 315.6 66.1 316.4Z" fill="#B7B334" />
      <path d="M47.2 319.8H35.6H33H22.5C21.7 319.8 21 320.5 21 321.4C21 322.2 21.7 322.9 22.5 322.9H33H35.6H47.2C48.1 322.9 48.8 322.2 48.8 321.4C48.8 320.5 48.1 319.8 47.2 319.8Z" fill="#B7B334" />
      <path d="M174.5 64.2L155.2 32C153.4 29 149.5 28 146.5 29.8C143.4 31.6 142.4 35.5 144.3 38.6L157.9 61.3L140.4 61.1L143.8 55.7V55.8L144.4 54.9C144.7 54.3 145.4 54.2 145.9 54.5L146.5 54.8C147 55.2 147.3 54.9 147.2 54.3L144.7 43.6C144.6 43 144 42.6 143.4 42.8L132.8 45.4C132.2 45.6 132.1 45.9 132.7 46.3L133.2 46.6C133.6 46.9 133.8 47.4 133.7 47.8L123.7 63.6C121.8 66.6 122.7 70.5 125.7 72.4C126.6 73 127.7 73.3 128.8 73.4C129.333 73.6 129.933 73.7 130.6 73.7L168.1 74.3C169.3 74.3 170.367 74.0333 171.3 73.5C171.633 73.3667 171.967 73.2 172.3 73C175.3 71.2 176.3 67.2 174.5 64.2Z" fill="white" />
    </motion.svg>
  }
  const TrashOrange = () => {
    return <motion.svg initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: .4 }} viewport={{ once: true }}
      className="w-full lg:w-[197px]" viewBox="0 0 197 118" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.5 80.3H34.5V78.7H28.5V80.3Z" fill="#2B201F" />
      <path d="M28.5 117.3H34.5V115.7H28.5V117.3Z" fill="#2B201F" />
      <path d="M22.2 98C22.2 108.7 27.5 117.3 34.1 117.3C40.7 117.3 46.1 108.7 46.1 98C46.1 87.4 40.7 78.8 34.1 78.8C27.5 78.8 22.2 87.4 22.2 98Z" fill="#2B201F" />
      <path d="M16.5 98C16.5 108.7 21.9 117.3 28.5 117.3C35.1 117.3 40.4 108.7 40.4 98C40.4 87.4 35.1 78.8 28.5 78.8C21.9 78.8 16.5 87.4 16.5 98Z" fill="#473A37" />
      <path d="M18.3 97.7C18.3 106.8 22.8 114.1 28.5 114.1C34.1 114.1 38.7 106.8 38.7 97.7C38.7 88.7 34.1 81.4 28.5 81.4C22.8 81.4 18.3 88.7 18.3 97.7Z" fill="#FCA438" />
      <path d="M21.1 90.2C21.1 93.6 22.8 96.4 24.9 96.4C27.1 96.4 28.8 93.6 28.8 90.2C28.8 86.8 27.1 84.1 24.9 84.1C22.8 84.1 21.1 86.8 21.1 90.2Z" fill="#B7B334" />
      <path d="M88.5 80.3H94.5V78.7H88.5V80.3Z" fill="#2B201F" />
      <path d="M88.5 117.3H94.5V115.7H88.5V117.3Z" fill="#2B201F" />
      <path d="M82.2 98C82.2 108.7 87.5 117.3 94.1 117.3C100.7 117.3 106.1 108.7 106.1 98C106.1 87.4 100.7 78.8 94.1 78.8C87.5 78.8 82.2 87.4 82.2 98Z" fill="#2B201F" />
      <path d="M76.5 98C76.5 108.7 81.9 117.3 88.5 117.3C95.1 117.3 100.5 108.7 100.5 98C100.5 87.4 95.1 78.8 88.5 78.8C81.9 78.8 76.5 87.4 76.5 98Z" fill="#473A37" />
      <path d="M78.3 97.7C78.3 106.8 82.9 114.1 88.5 114.1C94.1 114.1 98.7 106.8 98.7 97.7C98.7 88.7 94.1 81.4 88.5 81.4C82.9 81.4 78.3 88.7 78.3 97.7Z" fill="#FCA438" />
      <path d="M81.1 90.2C81.1 93.6 82.8 96.4 84.9 96.4C87.1 96.4 88.8 93.6 88.8 90.2C88.8 86.8 87.1 84.1 84.9 84.1C82.8 84.1 81.1 86.8 81.1 90.2Z" fill="#B7B334" />
      <path d="M159.3 80.3H165.4V78.7H159.3V80.3Z" fill="#2B201F" />
      <path d="M159.3 117.3H165.4V115.7H159.3V117.3Z" fill="#2B201F" />
      <path d="M153 98C153 108.7 158.4 117.3 165 117.3C171.6 117.3 177 108.7 177 98C177 87.4 171.6 78.8 165 78.8C158.4 78.8 153 87.4 153 98Z" fill="#2B201F" />
      <path d="M147.4 98C147.4 108.7 152.7 117.3 159.3 117.3C165.9 117.3 171.3 108.7 171.3 98C171.3 87.4 165.9 78.8 159.3 78.8C152.7 78.8 147.4 87.4 147.4 98Z" fill="#473A37" />
      <path d="M149.2 97.7C149.2 106.8 153.7 114.1 159.3 114.1C165 114.1 169.5 106.8 169.5 97.7C169.5 88.7 165 81.4 159.3 81.4C153.7 81.4 149.2 88.7 149.2 97.7Z" fill="#FCA438" />
      <path d="M152 90.2C152 93.6 153.7 96.4 155.8 96.4C157.9 96.4 159.6 93.6 159.6 90.2C159.6 86.8 157.9 84.1 155.8 84.1C153.7 84.1 152 86.8 152 90.2Z" fill="#B7B334" />
      <path d="M11 8.60001C10.8667 9.20001 10.8 9.83333 10.8 10.5V93.3C10.8 98.9 15.4 103.5 21 103.5H176.6C182.3 103.5 186.8 98.9 186.8 93.3V10.5C186.8 9.83333 186.733 9.20001 186.6 8.60001H11Z" fill="#FCA438" />
      <path d="M114.5 8.60001H62.6H59.2H10.9C10.7667 9.20001 10.7 9.83333 10.7 10.5V93.3C10.7 98.9 15.3 103.5 20.9 103.5H59.2H62.6H104.5C110.1 103.5 114.7 98.9 114.7 93.3V10.5C114.7 9.9 114.6 9.20001 114.5 8.60001Z" fill="#E8D94F" />
      <path d="M95.2 0.100006H5.70001C2.70001 0.100006 0.299988 2.49999 0.299988 5.39999C0.299988 8.39999 2.70001 10.8 5.70001 10.8H95.2V0.100006Z" fill="#FCA438" />
      <path d="M191 0.100006H82.3V10.8H191C193.9 10.8 196.3 8.39999 196.3 5.39999C196.3 2.49999 193.9 0.100006 191 0.100006Z" fill="#FCA438" />
      <path d="M66.1 77.1C66.1 77.9 65.4 78.6 64.6 78.6H22.6C21.7 78.6 21 77.9 21 77.1C21 76.2 21.7 75.5 22.6 75.5H64.6C65.4 75.5 66.1 76.2 66.1 77.1Z" fill="#FCA438" />
      <path d="M66.1 81.7C66.1 82.6 65.4 83.3 64.6 83.3H22.6C21.7 83.3 21 82.6 21 81.7C21 80.9 21.7 80.2 22.6 80.2H64.6C65.4 80.2 66.1 80.9 66.1 81.7Z" fill="#FCA438" />
      <path d="M66.1 86.4C66.1 87.3 65.4 88 64.6 88H22.6C21.7 88 21 87.3 21 86.4C21 85.6 21.7 84.9 22.6 84.9H64.6C65.4 84.9 66.1 85.6 66.1 86.4Z" fill="#FCA438" />
      <path d="M47.3 89.8H35.7H33.1H22.6C21.7 89.8 21 90.5 21 91.4C21 92.2 21.7 92.9 22.6 92.9H33.1H35.7H47.3C48.1 92.9 48.8 92.2 48.8 91.4C48.8 90.5 48.1 89.8 47.3 89.8Z" fill="#FCA438" />
      <path d="M174.6 64L155.3 31.8C153.5 28.8 149.6 27.8 146.5 29.6C143.5 31.4 142.5 35.3 144.3 38.4L157.9 61.1L140.5 60.9L143.9 55.5L144.4 54.7C144.8 54.1 145.5 54 146 54.3L146.5 54.6C147.1 55 147.4 54.7 147.2 54.1L144.8 43.4C144.7 42.8 144.1 42.4 143.5 42.5L132.9 45.2C132.3 45.3 132.2 45.7 132.7 46.1L133.2 46.4C133.7 46.6 133.9 47.2 133.7 47.6L123.8 63.4C121.9 66.4 122.8 70.3 125.7 72.2C126.7 72.8 127.8 73.1 128.8 73.2C129.4 73.4 130.033 73.5 130.7 73.5L168.2 74.1C169.333 74.0333 170.4 73.7666 171.4 73.3C171.733 73.1666 172.067 73 172.4 72.8C175.4 71 176.4 67 174.6 64Z" fill="white" />
    </motion.svg>
  }
  const [goodStats, setGoodStats] = useState({
    'green': 0,
    'yellow': 0,
    'orange': 0
  })
  const [menkes, setMenkes] = useState<Record<string, number>>({
    'burn': 0,
    'officer': 0,
    'tps': 0,
    'river': 0
  })
  const labels: Record<string, string> = {
    'burn': 'Membakar sampah',
    'officer': 'Mengandalkan petugas kebersihan untuk mengangkut sampah',
    'tps': 'Membuang sampah ke Tempat Pembuangan Sementara (TPS)',
    'river': 'Membuang sampah di sungai dan selokan'
  }

  const ref = useRef(null)
  const inView = useInView(ref)
  useEffect(() => {
    if (inView) {
      setGoodStats({
        'green': 48.9,
        'yellow': 42.9,
        'orange': 1.2
      })
      setMenkes({
        'burn': 57.2,
        'officer': 27.6,
        'tps': 8.7,
        'river': 2.8
      })
    } else {
      setGoodStats({
        'green': 0,
        'yellow': 0,
        'orange': 0
      })
      setMenkes({
        'burn': 0,
        'officer': 0,
        'tps': 0,
        'river': 0
      })
    }
  }, [inView])
  const canAnimate = useCanAnimate()
  return (
    <div ref={ref} className="relative overflow-clip font-sora py-14 space-y-6 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${baseUrl}/assets/1.0.png)`, backgroundColor: "#d0d1c3" }}>
      <div className="relative flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }} viewport={{ once: true }}
          className={`text-center text-4xl md:text-6xl xl:text-7xl py-2 font-extrabold flex flex-col space-y-2 bg-no-repeat text-transparent bg-clip-text`} style={{ backgroundImage: `url('${baseUrl}/assets/1.2.png')` }}>
          <div>Mengelola Sampah</div>
          <div>Orang Indonesia</div>
        </motion.div>
        <motion.div viewport={{ once: true }}
          initial={{ opacity: 0, y: -20, scale: 1.2, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -6 }}
          transition={{ duration: .4, delay: .2 }}
          className="absolute bg-[#d7d539] mt-2 px-1 md:px-2 py-0.5 md:py-1 text-xl md:text-2xl xl:text-3xl -rotate-6 font-extrabold shadow-lg border border-[#d7d439d7]">Ala</motion.div>
      </div>
      <div className="relative flex items-center flex-col justify-center w-full space-y-12 md:space-y-24 max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .4, delay: .2 }} viewport={{ once: true }}
          className="w-fit px-5 py-1 text-center text-2xl md:text-3xl xl:text-4xl font-semibold text-white bg-[#3c6b5a] rounded-lg">
          Sudahkah Caranya Tepat?
        </motion.div>
        <div className="rounded-2xl bg-[#ffefdb] pt-8 lg:pt-12 p-6 lg:p-10 relative flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .4, delay: .2 }} viewport={{ once: true }}
            className="absolute bg-[#d5d639] py-1 px-5 rounded-lg -top-[5%]">
            <div
              className="text-xl md:text-2xl xl:text-3xl text-center font-medium font-sora">
              Survei GoodStats:
            </div>
          </motion.div>
          <div className="flex space-y-7 lg:space-x-6 flex-col lg:flex-row">
            <MotionConfig
              transition={{
                layout: canAnimate ? { duration: 0.9, bounce: 0, type: 'spring' } : { duration: 0 }
              }}
            >
              <div className="w-full lg:w-1/2 flex items-end space-x-3 relative">
                <div className="relative flex flex-col items-center space-y-3">
                  <TrashGreen />
                  <MotionNumberFlow willChange
                    value={goodStats.green}
                    className="text-2xl font-bold"
                    suffix="%"
                    format={{ style: 'decimal' }}
                    //@ts-ignore
                    style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                    // Important, see note below:
                    layout
                    layoutRoot
                  />
                </div>
                <div className="relative flex flex-col items-center space-y-3">
                  <TrashYellow />
                  <MotionNumberFlow willChange
                    value={goodStats.yellow}
                    suffix="%"
                    className="text-2xl font-bold"
                    format={{ style: 'decimal' }}
                    //@ts-ignore
                    style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                    // Important, see note below:
                    layout
                    layoutRoot
                  />
                </div>
                <div className="relative flex flex-col items-center space-y-3">
                  <TrashOrange />
                  <MotionNumberFlow willChange
                    value={goodStats.orange}
                    suffix="%"
                    className="text-2xl font-bold"
                    format={{ style: 'decimal' }}
                    //@ts-ignore
                    style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                    // Important, see note below:
                    layout
                    layoutRoot
                  />
                </div>
              </div>
            </MotionConfig>
            <div className="flex-1">
              <ul className="space-y-4 text-lg md:text-xl lg:text-2xl">
                <motion.li
                  initial={{ opacity: 0, x: 20 }} viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: 0 }}
                  className="flex items-start">
                  <div className="bg-[#5d9b7b] rounded-full size-6 m-2 mr-4" />
                  <div className="flex-1">Mengaku selalu membuang sampah di tempatnya</div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }} viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: 0.1 }}
                  className="flex items-start">
                  <div className="bg-[#b7b334] rounded-full size-6 m-2 mr-4" />
                  <div className="flex-1">Tidak selalu membuang sampah pada tempatnya</div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 20 }} viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: 0.2 }}
                  className="flex items-start">
                  <div className="bg-[#fca438] rounded-full size-6 m-2 mr-4" />
                  <div className="flex-1">Tidak pernah membuang sampah di tempatnya</div>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-[#ffefdb] py-12 lg:py-16 pb-12 lg:pb-20 p-6 lg:p-10 relative flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .4, delay: .2 }}
            className="absolute bg-[#3c6b5a] py-1 px-5 rounded-lg -top-[3.5%]">
            <div className="text-xl md:text-2xl xl:text-3xl text-center text-white font-medium font-sora">
              Survei Kementerian Kesehatan RI:
            </div>
          </motion.div>
          <div className="w-full">
            <MotionConfig
              transition={{
                layout: canAnimate ? { duration: 0.9, bounce: 0, type: 'spring' } : { duration: 0 }
              }}
            >
              <div className="w-full flex flex-col items-center justify-start lg:justify-center relative space-y-6">
                {Object.keys(menkes).map((key, index) => (
                  <div key={index} className="flex lg:flex-row flex-col w-full items-start lg:items-center space-x-0 lg:space-x-6 space-y-2 lg:space-y-0">
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:space-x-3 space-x-0 ">
                      <div className="size-[6rem] lg:size-[4rem] -mr-10 z-10">
                        <img src={`${baseUrl}/assets/1.4.${index}.png`} alt="" className="h-full w-full object-contain" />
                      </div>
                      <div className="h-[3rem] lg:h-[2rem] w-full">
                        <motion.div initial={{ width: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} whileInView={{ width: `calc(${menkes[key]}% + 40px)` }} className="h-full bg-[#3c6b5a] rounded-lg" />
                      </div>
                      <MotionNumberFlow willChange
                        value={menkes[key] as number}
                        suffix="%"
                        className="text-2xl font-bold w-[100px] text-right"
                        format={{ style: 'decimal' }}
                        //@ts-ignore
                        style={{ '--number-flow-char-height': '0.85em', '--number-flow-mask-height': '0.3em' }}
                        // Important, see note below:
                        layout
                        layoutRoot
                      />
                    </div>
                    <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .4, delay: index * .1 }} className="text-lg md:text-xl xl:text-2xl w-full lg:w-1/2">{labels[key]}</motion.div>
                  </div>
                ))}
              </div>
            </MotionConfig>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: .4, delay: .2 }}
            className="absolute bg-[#3c6b5a] py-3 px-10 w-fit md:rounded-lg -bottom-[12%] md:-bottom-[10%] xl:-bottom-[10%] max-w-3xl mx-auto">
            <div className="text-xl md:text-2xl xl:text-3xl text-center text-white font-medium font-sora">
              Temuan ini menunjukkan bahwa kesadaran masyarakat Indonesia masih rendah
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: .3, delay: .3 }}
          className="relative bg-black/50 !mt-[5.5rem] md:mt-auto py-6 px-10 w-fit md:rounded-lg max-w-3xl mx-auto pb-12 flex items-center justify-center">
          <div className="text-lg md:text-xl xl:text-2xl text-center text-white font-medium font-sora">
            Pengelolaan sampah di Indonesia masih menggunakan paradigma lama. Pengomposan dan daur ulang baru menyentuh sebagian kecil masyarakat dan masih jauh dari kata berkelanjutan.
          </div>
          <div className="bg-white rounded-lg px-3 py-2 text-gray-800 text-center text-base md:text-lg xl:text-xl w-fit mx-auto absolute bottom-[-18%]">
            ujar Guru Besar Institut Teknologi Bandung <br /> dan ahli sampah Indonesia, Prof. Enri Damanhuri
          </div>
        </motion.div>
      </div>
      <div className="absolute h-[50%] !-mt-6 bg-gradient-to-b from-[#efeff0] w-full top-0 z-[1]" />
      <div className="absolute h-[30%] !-mt-6 bg-gradient-to-t from-black/80 w-full bottom-0 z-[1]" />
      <div className="absolute z-0 bottom-0 h-[50%] w-full">
        <div className="absolute inset-6  h-full w-full top-0 left-0 right-0" />
        <img src={`${baseUrl}/assets/1.5.png`} alt="Background" className="w-full mask-linear mask-dir-to-t object-cover object-bottom h-full opacity-50" />
      </div>
      <img src={`${baseUrl}/assets/footer.png`} className="z-50 relative bottom-0 h-full w-fit mx-auto" />
    </div >
  );

}
