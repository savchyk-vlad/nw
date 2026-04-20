import * as React from "react";

const HIGHLIGHT_TERMS = [
  "Northwood Renovation",
  "Northwood Renovation Team",
  "Seattle, Washington",
  "Seattle, WA",
  "West Seattle, WA",
  "Ballard, WA",
  "Queen Anne, WA",
  "Capitol Hill, WA",
  "Shoreline, WA",
  "Bellevue, WA",
  "Kirkland, WA",
  "Renton, WA",
  "Kent, WA",
  "Redmond, WA",
  "Mercer Island, WA",
  "Burien, WA",
  "Tukwila, WA",
  "Newcastle, WA",
  "Issaquah, WA",
  "Sammamish, WA",
  "Bothell, WA",
  "Kenmore, WA",
  "Lake Forest Park, WA",
  "Mountlake Terrace, WA",
  "Edmonds, WA",
  "Lynnwood, WA",
  "Mukilteo, WA",
  "Mill Creek, WA",
  "Everett, WA",
  "Snohomish, WA",
  "Marysville, WA",
  "Lake Stevens, WA",
  "Arlington, WA",
  "Monroe, WA",
  "Stanwood, WA",
  "Mount Vernon, WA",
  "Burlington, WA",
  "Sedro-Woolley, WA",
  "Anacortes, WA",
  "Woodinville, WA",
  "Auburn, WA",
  "Des Moines, WA",
  "Federal Way, WA",
  "SeaTac, WA",
  "Covington, WA",
  "Maple Valley, WA",
  "Medina, WA",
  "Clyde Hill, WA",
  "Green Lake, WA",
  "Magnolia, WA",
  "Fremont, WA",
  "Wallingford, WA",
  "Beacon Hill, WA",
  "Columbia City, WA",
  "Rainier Beach, WA",
  "Northgate, WA",
  "Greenwood, WA",
  "Phinney Ridge, WA",
  "Madison Park, WA",
  "Ravenna, WA",
  "Wedgwood, WA",
  "Mount Baker, WA",
  "West Seattle",
  "Mercer Island",
  "Queen Anne",
  "Capitol Hill",
  "Bellevue",
  "Kirkland",
  "Shoreline",
  "Redmond",
  "Ballard",
  "Renton",
  "Seattle",
  "Kent",
  "Shoreline",
  "Mukilteo",
  "Everett",
  "Mount Vernon",
  "Burlington",
  "Lynnwood",
  "Edmonds",
  "Marysville",
  "Monroe",
  "Snohomish",
  "outdoor",
  "Outdoor",
  "fences",
  "Fences",
  "fence",
  "Fence",
  "decks",
  "Decks",
  "deck",
  "Deck",
];

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightPattern = new RegExp(
  `(${HIGHLIGHT_TERMS.map(escapeRegExp).join("|")})`,
  "g",
);

const highlightLookup = new Set(HIGHLIGHT_TERMS);

export const renderHighlightedText = (text: string) => {
  const parts = text.split(highlightPattern);

  return parts.map((part, index) =>
    highlightLookup.has(part) ? (
      <span className="brand-highlight" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};

export const renderBrandText = renderHighlightedText;

export default renderHighlightedText;
