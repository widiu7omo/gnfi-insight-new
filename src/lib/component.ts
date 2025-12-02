import { Hero, HeroType } from "../components/post/hero";
import { Navbar, NavbarType } from "../components/post/navbar";
import DynamicComponent, { DynamicComponentType } from "../components/post/dynamic-component";
import { Paragraph, ParagraphType } from "../components/post/paragraph";
import { SectionHeader, SectionHeaderType } from "../components/post/section-header";
import { Image, ImageType } from "../components/post/image";
import { Heading, HeadingType } from "../components/post/heading";
import { Quote, QuoteType } from "../components/post/quote";

export type GetComponentType = typeof Navbar |
  typeof Hero |
  typeof Image |
  typeof Paragraph |
  typeof SectionHeader |
  typeof Heading |
  typeof Quote |
  typeof DynamicComponent;
export type GetComponentPropsType = NavbarType |
  HeroType |
  ImageType |
  ParagraphType |
  SectionHeaderType |
  HeadingType |
  QuoteType |
  DynamicComponentType | {} | Record<string, unknown>
export const getComponent = (
  componentId: number,
): GetComponentType => {
  return componentList[componentId] as GetComponentType;
};

export const COMPONENT_NAVBAR: number = 0;
export const COMPONENT_HERO: number = 1;
export const COMPONENT_IMAGE: number = 2;
export const COMPONENT_PARAGRAPH: number = 3;
export const COMPONENT_SECTION_HEADER: number = 4;
export const COMPONENT_HEADING: number = 5;
export const COMPONENT_QUOTE: number = 6;
export const COMPONENT_SECTION_GROUP: number = 8;
export const COMPONENT_CUSTOM: number = 9;
export const componentList: Record<
  number,
  typeof Navbar |
  typeof Hero |
  typeof Image |
  typeof Paragraph |
  typeof SectionHeader |
  typeof Heading |
  typeof Quote |
  typeof DynamicComponent
> = { 0: Navbar, 1: Hero, 2: Image, 3: Paragraph, 4: SectionHeader, 5: Heading, 6: Quote, 9: DynamicComponent };
