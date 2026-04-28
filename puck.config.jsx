"use client";

import React from "react";
import { HeroBlock } from "./components/HeroBlock";
import { ProductGrid } from "./components/ProductGrid";
import { TextBlock } from "./components/TextBlock";
import { HeaderBlock } from "./components/HeaderBlock";
import { FooterBlock } from "./components/FooterBlock";
import { TestimonialBlock } from "./components/TestimonialBlock";
import { FaqBlock } from "./components/FaqBlock";
import { NewsletterBlock } from "./components/NewsletterBlock";
import { FeaturedProductBlock } from "./components/FeaturedProductBlock";
import { TrustBadgeBlock } from "./components/TrustBadgeBlock";
import { AnnouncementBarBlock } from "./components/AnnouncementBarBlock";
import { SaleBannerBlock } from "./components/SaleBannerBlock";
import { CollectionListBlock } from "./components/CollectionListBlock";
import { NewArrivalsBlock } from "./components/NewArrivalsBlock";
import { ShippingInfoBarBlock } from "./components/ShippingInfoBarBlock";
import { AutoScrollLogoBannerBlock } from "./components/AutoScrollLogoBannerBlock";
import { AutoScrollProductsBlock } from "./components/AutoScrollProductsBlock";
import { CountdownTimerBlock } from "./components/CountdownTimerBlock";
import { MorphingHeroBlock } from "./components/MorphingHeroBlock";
import { ProductCard3DBlock } from "./components/ProductCard3DBlock";
import { LiveVisitorsBlock } from "./components/LiveVisitorsBlock";
import { RecentPurchasePopupBlock } from "./components/RecentPurchasePopupBlock";
import { ConfettiCTABlock } from "./components/ConfettiCTABlock";
import { VideoHeroBlock } from "./components/VideoHeroBlock";
import { CustomCodeBlock } from "./components/CustomCodeBlock";
import { ContactFormBlock } from "./components/ContactFormBlock";
import { AboutSectionBlock } from "./components/AboutSectionBlock";
import { LoginFormBlock } from "./components/LoginFormBlock";
import { SignupFormBlock } from "./components/SignupFormBlock";
import { CircularCategoryBlock } from "./components/CircularCategoryBlock";
import { NewsletterPopupBlock } from "./components/NewsletterPopupBlock";
import { HeroSliderBlock } from "./components/HeroSliderBlock";
import { AdvancedHeaderBlock } from "./components/AdvancedHeaderBlock";
import { NewArrivalsScrollBlock } from "./components/NewArrivalsScrollBlock";
import { FlashSaleTimerBlock } from "./components/FlashSaleTimerBlock";
import { FeaturedCollectionBlock } from "./components/FeaturedCollectionBlock";
import { PremiumShopBlock } from "./components/PremiumShopBlock";
import { PremiumFooterBlock } from "./components/PremiumFooterBlock";
import { PremiumHeaderBlock } from "./components/PremiumHeaderBlock";
import { DynamicProductGridBlock } from "./components/DynamicProductGridBlock";
import { SidebarProductGridBlock } from "./components/SidebarProductGridBlock";
import { PremiumPricingBlock } from "./components/PremiumPricingBlock";
import { BentoFeaturesBlock } from "./components/BentoFeaturesBlock";
import { PremiumCTABannerBlock } from "./components/PremiumCTABannerBlock";

import { ImageUploadField } from "./components/ImageUploadField";
import { VideoUploadField } from "./components/VideoUploadField";
import { MonacoEditorField } from "./components/MonacoEditorField";

const transformFields = (fields) => {
  if (!fields) return;
  
  Object.keys(fields).forEach(fieldKey => {
    const field = fields[fieldKey];

    // Recursive transform for array fields
    if (field.type === "array") {
      if (field.fields) transformFields(field.fields);
      if (field.arrayFields) transformFields(field.arrayFields);
    }

    const isExcluded = (
      fieldKey.toLowerCase().includes("height") || 
      fieldKey.toLowerCase().includes("width") || 
      fieldKey.toLowerCase().includes("color") || 
      fieldKey.toLowerCase().includes("size") ||
      fieldKey.toLowerCase().includes("count")
    );

    // Target fields that look like images
    const isImageField = !isExcluded && (field.type === "text" || !field.type) && 
      (fieldKey.toLowerCase().includes("image") || 
       fieldKey.toLowerCase().includes("url") || 
       fieldKey.toLowerCase().includes("logo") || 
       fieldKey.toLowerCase().includes("banner") || 
       fieldKey.toLowerCase().includes("thumbnail") || 
       fieldKey.toLowerCase().includes("icon") ||
       fieldKey.toLowerCase().includes("img") ||
       fieldKey.toLowerCase().includes("photo") ||
       fieldKey.toLowerCase().includes("avatar") ||
       fieldKey.toLowerCase().includes("asset"));

    if (isImageField) {
      fields[fieldKey] = {
        type: "text",
        render: ({ value, onChange, field }) => (
          <ImageUploadField 
            value={value} 
            onChange={onChange} 
            label={field.label || fieldKey} 
          />
        )
      };
    }

    // Target fields that look like videos
    const isVideoField = (field.type === "text" || !field.type) && 
      (fieldKey.toLowerCase().includes("video") || 
       fieldKey.toLowerCase().includes("movie") || 
       fieldKey.toLowerCase().includes("clip") ||
       fieldKey.toLowerCase().includes("mp4"));

    if (isVideoField) {
      fields[fieldKey] = {
        type: "text",
        render: ({ value, onChange, field }) => (
          <VideoUploadField 
            value={value} 
            onChange={onChange} 
            label={field.label || fieldKey} 
          />
        )
      };
    }

    // Target Custom CSS fields
    if (fieldKey === "customCss" && (field.type === "text" || field.type === "textarea")) {
      fields[fieldKey] = {
        type: "text",
        render: ({ value, onChange }) => (
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-500">Section Custom CSS</label>
            <MonacoEditorField value={value} onChange={onChange} language="css" height="150px" />
          </div>
        )
      };
    }
  });
};

export const config = {
  root: {
    fields: {
      title: { type: "text", label: "SEO Title" },
      description: { type: "textarea", label: "SEO Description" },
      primaryColor: { 
        type: "select", 
        label: "Store Theme Color",
        options: [
          { label: "Storivo Red", value: "#C83214" },
          { label: "Classic Black", value: "#000000" },
          { label: "Modern Blue", value: "#1A3A8A" },
          { label: "Luxury Gold", value: "#B8860B" },
        ]
      },
    },
    render: ({ children, title, primaryColor }) => {
      return (
        <div style={{ "--primary": primaryColor }}>
          {children}
          <style jsx global>{`
            :root {
              --primary: ${primaryColor || '#C83214'};
            }
          `}</style>
        </div>
      );
    }
  },
  categories: {
    premium: { title: "⭐ PREMIUM", components: ["PremiumHeader"] },
    essential: { title: "Store Essential", components: ["AdvancedHeader", "PremiumFooter", "AnnouncementBar", "Header", "Footer", "ContactForm", "LoginForm", "SignupForm"] },
    marketing: { title: "Marketing", components: ["PremiumCTABanner", "BentoFeatures", "PremiumPricing", "FlashSaleTimer", "NewsletterPopup", "ConfettiCTA", "CountdownTimer", "SaleBanner", "Testimonials", "FAQ", "Newsletter"] },
    products: { title: "Products", components: ["SidebarProductGrid", "DynamicProductGrid", "PremiumShop", "FeaturedCollection", "NewArrivalsScroll", "CircularCategory", "ProductCard3D", "AutoScrollProducts", "CollectionList", "FeaturedProduct", "NewArrivals", "Products"] },
    trust: { title: "Trust", components: ["LiveVisitors", "RecentPurchasePopup", "AutoScrollLogoBanner", "TrustBadges", "ShippingInfoBar"] },
    typography: { title: "Typography", components: ["HeroSlider", "AboutSection", "VideoHero", "MorphingHero", "Hero", "Text"] },
    other: { title: "Advanced", components: ["CustomCode"] },
  },
  components: {
    AnnouncementBar: AnnouncementBarBlock,
    Header: HeaderBlock,
    PremiumHeader: PremiumHeaderBlock,
    AdvancedHeader: AdvancedHeaderBlock,
    Footer: FooterBlock,
    PremiumFooter: PremiumFooterBlock,
    ContactForm: ContactFormBlock,
    LoginForm: LoginFormBlock,
    SignupForm: SignupFormBlock,
    CountdownTimer: CountdownTimerBlock,
    FlashSaleTimer: FlashSaleTimerBlock,
    ConfettiCTA: ConfettiCTABlock,
    SaleBanner: SaleBannerBlock,
    Testimonials: TestimonialBlock,
    FAQ: FaqBlock,
    Newsletter: NewsletterBlock,
    NewsletterPopup: NewsletterPopupBlock,
    PremiumPricing: PremiumPricingBlock,
    BentoFeatures: BentoFeaturesBlock,
    PremiumCTABanner: PremiumCTABannerBlock,
    AutoScrollProducts: AutoScrollProductsBlock,
    DynamicProductGrid: DynamicProductGridBlock,
    SidebarProductGrid: SidebarProductGridBlock,
    CollectionList: CollectionListBlock,
    FeaturedProduct: FeaturedProductBlock,
    FeaturedCollection: FeaturedCollectionBlock,
    NewArrivals: NewArrivalsBlock,
    NewArrivalsScroll: NewArrivalsScrollBlock,
    Products: ProductGrid,
    Hero: HeroBlock,
    HeroSlider: HeroSliderBlock,
    VideoHero: VideoHeroBlock,
    MorphingHero: MorphingHeroBlock,
    Text: TextBlock,
    CircularCategory: CircularCategoryBlock,
    AutoScrollLogoBanner: AutoScrollLogoBannerBlock,
    ShippingInfoBar: ShippingInfoBarBlock,
    TrustBadges: TrustBadgeBlock,
    LiveVisitors: LiveVisitorsBlock,
    RecentPurchasePopup: RecentPurchasePopupBlock,
    ProductCard3D: ProductCard3DBlock,
    AboutSection: AboutSectionBlock,
    CustomCode: CustomCodeBlock,
  },
};

// Apply transformations
Object.keys(config.components).forEach(key => {
  const component = config.components[key];
  if (component.fields) {
    transformFields(component.fields);
  }
});
