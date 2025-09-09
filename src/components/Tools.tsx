import React, { useMemo, useState } from "react";
import { Progress } from "@/components/ui/progress";

// Import the TikTok Shop image
import tiktokshopImage from '@/assets/tools/tiktokshop.png'; 
import ShopeeImage from '@/assets/tools/shopee.png'; 
import LazadaImage from '@/assets/tools/lazada.png'; 
import TikTokAdsImage from '@/assets/tools/TikTokAds.png'; 
import MetaAdsImage from '@/assets/tools/meta.png'; 
import GoogleAdsImage from '@/assets/tools/GoogleAds.png'
import PowerBIImage from '@/assets/tools/powerbi.png';
import ExcelImage from '@/assets/tools/excel.png';
import GoogleSheetsImage from '@/assets/tools/GoogleSheets.png';
import LookerStudioImage from '@/assets/tools/looker.png';
import SupabaseImage from '@/assets/tools/supabase.png'; 
import TrelloImage from '@/assets/tools/trello.png';
import SlackImage from '@/assets/tools/slack.png'; 
import notionImage from '@/assets/tools/notion.png'; 
import MiroImage from '@/assets/tools/Miro.png'; // Make sure this path is correct relative to your project structure
import VSCodeImage from '@/assets/tools/vscode.png'; 
import BoltImage from '@/assets/tools/bolt.png'; // 
import LovableImage from '@/assets/tools/lovable.png'; 
import ReplitImage from '@/assets/tools/replit.png'; 
import CursorImage from '@/assets/tools/cursor.png'; // Make sure this path is correct relative to your project structure
import WindsurfImage from '@/assets/tools/windsurf.png'; // Make sure this path is correct relative to your project structure
import GithubCopilotImage from '@/assets/tools/Github Copilot.png'; // Make sure this path is correct relative to your project structure
import ChatGPTImage from '@/assets/tools/ChatGPT.png'; // Make sure this path is correct relative to your project structure
import GeminiImage from '@/assets/tools/gemini.png'; // Make sure this path is correct relative to your project structure
import DeepseekImage from '@/assets/tools/deepseek.png'; // Make sure this path is correct relative to your project structure
import FastmossImage from '@/assets/tools/fastmoss.png'; // Make sure this path is correct relative to your project structure
import ShopplusImage from '@/assets/tools/Shoplus.png'; // Make sure this path is correct relative to your project structure

const allTools = [
  // Advertising & Marketplaces
  { name: "TikTok Shop", type: "image", src: tiktokshopImage },
  { name: "Shopee", type: "image", src: ShopeeImage },
  { name: "Lazada", type: "image", src: LazadaImage },
  { name: "TikTok Ads", type: "image", src: TikTokAdsImage },
  { name: "Meta Ads", type: "image", src: MetaAdsImage },
  { name: "Google Ads", type: "image", src: GoogleAdsImage },

  // Analytics & Data
  { name: "PowerBI", type: "image", src: PowerBIImage },
  { name: "Excel", type: "image", src: ExcelImage },
  { name: "Google Sheets", type: "image", src: GoogleSheetsImage },
  { name: "Looker Studio", type: "image", src: LookerStudioImage },
  { name: "Supabase", type: "image", src: SupabaseImage },

  // Collaboration
  { name: "Trello", type: "image", src: TrelloImage },
  { name: "Slack", type: "image", src: SlackImage },
  { name: "Notion", type: "image", src: notionImage },
  { name: "Miro", type: "image", src: MiroImage },

  // Dev Tools
  { name: "VS Code", type: "image", src: VSCodeImage },
  { name: "Lovable", type: "image", src: LovableImage },
  { name: "Bolt.new", type: "image", src: BoltImage },
  { name: "Replit Agent", type: "image", src: ReplitImage },
  { name: "Cursor", type: "image", src: CursorImage },
  { name: "Windsurf", type: "image", src: WindsurfImage },
  { name: "GitHub Copilot", type: "image", src: GithubCopilotImage },

  // LLMs & Assistants
  { name: "ChatGPT", type: "image", src: ChatGPTImage },
  { name: "Gemini", type: "image", src: GeminiImage },
  { name: "Deepsek", type: "image", src: DeepseekImage },

  // Others
  { name: "Fastmoss", type: "image", src: FastmossImage },
  { name: "ShopPlus", type: "image", src: ShopplusImage },
];

const chunk = <T,>(arr: T[], size: number) => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const Tools = () => {
  // split into pages of 6 tools (3 columns × 2 rows)
  const pages = useMemo(() => chunk(allTools, 6), []);
  const [pageIndex, setPageIndex] = useState(0);

  const prev = () =>
    setPageIndex((i) => (i - 1 + pages.length) % pages.length);
  const next = () =>
    setPageIndex((i) => (i + 1) % pages.length);

  return (
    <section id="tools" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium mb-2">Tools I Used</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Exploring the{" "}
            <span className="text-accent">Tools</span>
            <br />
            Behind my Works
          </h2>
        </div>

        {/* Paged tools area */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left arrow */}
          <button
            aria-label="Previous tools"
            onClick={prev}
            className="absolute top-1/2 p-3 rounded-full bg-white/90 shadow-md hover:bg-white"
            style={{
              left: "-48px",
              transform: "translateY(-50%)",
              zIndex: 20,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Tools Grid Container */}
          <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-8 p-6 bg-transparent">
            {pages[pageIndex].map((tool, idx) => { // Changed 'name' to 'tool'
              const globalIndex = pageIndex * 6 + idx;
              const percentage = 65 + ((globalIndex * 7) % 31); // deterministic-ish

              // Only show the first 3 on small screens, and all 6 on md and up
              const isHiddenOnSmall = idx >= 3 ? "hidden md:block" : "";

              return (
                <div key={`${pageIndex}-${idx}`} className={`card-service text-center ${isHiddenOnSmall}`}>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {tool.type === "image" ? (
                      <img src={tool.src} alt={tool.name} className="w-10 h-10 object-contain" /> // Render image
                    ) : (
                      <span className="text-2xl font-bold text-accent">
                        {tool.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {tool.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-accent font-semibold">
                        {percentage}%
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2 bg-muted" />
                  </div>
                </div>
              );
            })}

            {/* If a page has fewer than 6 items, render empty placeholders to preserve desktop layout */}
            {Array.from({ length: 6 - pages[pageIndex].length }).map((_, i) => (
              <div key={`empty-${i}`} className="card-service invisible hidden md:block" />
            ))}
          </div>

          {/* Right arrow */}
          <button
            aria-label="Next tools"
            onClick={next}
            className="absolute top-1/2 p-3 rounded-full bg-white/90 shadow-md hover:bg-white"
            style={{
              right: "-48px",
              transform: "translateY(-50%)",
              zIndex: 20,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Page indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setPageIndex(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-3 h-3 rounded-full ${
                  i === pageIndex ? "bg-accent" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;