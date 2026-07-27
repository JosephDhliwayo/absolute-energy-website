import { SITE_INFO } from "./siteInfo";

export interface ResultCardItem {
  label: string;
  value: string;
  sub?: string;
}

export interface ResultCardInput {
  heading: string;
  items: ResultCardItem[];
  caveat?: string;
  note?: string;
}

const COLORS = {
  black: "#000000",
  orange: "#E8791E",
  warmGrey: "#6E6B69",
  lightGrey: "#F2F2F2",
  white: "#FFFFFF",
};

const CARD_WIDTH = 1000;
const MARGIN = 60;
const CONTENT_WIDTH = CARD_WIDTH - MARGIN * 2;
const HEADER_HEIGHT = 200;
const MAX_HEIGHT = 3000;
const ITEM_HEIGHT = 130;
const ITEM_GAP = 20;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

/**
 * Draws top-down onto an oversized canvas, tracking the actual cursor position as it
 * goes, and returns the final y so the caller can crop to the real content height.
 * (A separate pre-pass that estimates height with its own formula tends to drift out
 * of sync with the real draw pass — this keeps position-tracking to one code path.)
 */
function draw(ctx: CanvasRenderingContext2D, logo: HTMLImageElement, input: ResultCardInput): number {
  ctx.fillStyle = COLORS.white;
  ctx.fillRect(0, 0, CARD_WIDTH, MAX_HEIGHT);

  ctx.fillStyle = COLORS.black;
  ctx.fillRect(0, 0, CARD_WIDTH, HEADER_HEIGHT);

  const logoHeight = 110;
  const logoWidth = (logo.width / logo.height) * logoHeight;
  ctx.drawImage(logo, (CARD_WIDTH - logoWidth) / 2, (HEADER_HEIGHT - logoHeight) / 2, logoWidth, logoHeight);

  ctx.fillStyle = COLORS.orange;
  ctx.fillRect(0, HEADER_HEIGHT, CARD_WIDTH, 6);

  let y = HEADER_HEIGHT + 6 + 50;
  const centerX = CARD_WIDTH / 2;
  ctx.textAlign = "center";

  ctx.fillStyle = COLORS.orange;
  ctx.font = "bold 16px system-ui, sans-serif";
  ctx.fillText("AE CONNECT RESULT", centerX, y);
  y += 40;

  ctx.fillStyle = COLORS.black;
  ctx.font = "bold 32px system-ui, sans-serif";
  ctx.fillText(input.heading, centerX, y);
  y += 30;

  ctx.fillStyle = COLORS.warmGrey;
  ctx.font = "15px system-ui, sans-serif";
  const generatedOn = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  ctx.fillText(`Generated on ${generatedOn}`, centerX, y);
  y += 40;

  for (const item of input.items) {
    drawRoundedRect(ctx, MARGIN, y, CONTENT_WIDTH, ITEM_HEIGHT, 14);
    ctx.fillStyle = COLORS.lightGrey;
    ctx.fill();

    let cy = y + 40;
    ctx.fillStyle = COLORS.warmGrey;
    ctx.font = "bold 14px system-ui, sans-serif";
    ctx.fillText(item.label.toUpperCase(), centerX, cy);

    cy += 40;
    ctx.fillStyle = COLORS.orange;
    ctx.font = "bold 30px system-ui, sans-serif";
    ctx.fillText(item.value, centerX, cy);

    if (item.sub) {
      cy += 26;
      ctx.fillStyle = COLORS.warmGrey;
      ctx.font = "13px system-ui, sans-serif";
      ctx.fillText(item.sub, centerX, cy);
    }

    y += ITEM_HEIGHT + ITEM_GAP;
  }

  if (input.caveat) {
    ctx.font = "16px system-ui, sans-serif";
    const lines = wrapText(ctx, input.caveat, CONTENT_WIDTH - 60);
    const boxHeight = lines.length * 26 + 30;
    y += 10;
    drawRoundedRect(ctx, MARGIN + 30, y, CONTENT_WIDTH - 60, boxHeight, 10);
    ctx.fillStyle = COLORS.lightGrey;
    ctx.fill();
    ctx.fillStyle = COLORS.warmGrey;
    let ly = y + 32;
    for (const line of lines) {
      ctx.fillText(line, centerX, ly);
      ly += 26;
    }
    y += boxHeight;
  }

  if (input.note) {
    ctx.font = "15px system-ui, sans-serif";
    const lines = wrapText(ctx, input.note, CONTENT_WIDTH);
    y += 30;
    ctx.fillStyle = COLORS.warmGrey;
    for (const line of lines) {
      ctx.fillText(line, centerX, y);
      y += 24;
    }
  }

  y += 40;
  ctx.strokeStyle = COLORS.lightGrey;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(MARGIN, y);
  ctx.lineTo(CARD_WIDTH - MARGIN, y);
  ctx.stroke();

  ctx.fillStyle = COLORS.black;
  ctx.font = "bold 17px system-ui, sans-serif";
  ctx.fillText(SITE_INFO.companyName, centerX, y + 40);

  ctx.fillStyle = COLORS.orange;
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText(SITE_INFO.tagline, centerX, y + 62);

  ctx.fillStyle = COLORS.warmGrey;
  ctx.font = "14px system-ui, sans-serif";
  ctx.fillText(`${SITE_INFO.phones.join("  |  ")}  |  ${SITE_INFO.email}`, centerX, y + 90);
  ctx.fillText(`${SITE_INFO.address}  |  ${SITE_INFO.website}`, centerX, y + 112);

  return y + 112 + 40;
}

export async function renderResultCard(input: ResultCardInput): Promise<Blob> {
  const logo = await loadImage("/logo-full.png");

  const scratch = document.createElement("canvas");
  scratch.width = CARD_WIDTH;
  scratch.height = MAX_HEIGHT;
  const scratchCtx = scratch.getContext("2d");
  if (!scratchCtx) throw new Error("Canvas 2D context unavailable");

  const finalHeight = Math.ceil(draw(scratchCtx, logo, input));

  const final = document.createElement("canvas");
  final.width = CARD_WIDTH;
  final.height = finalHeight;
  const finalCtx = final.getContext("2d");
  if (!finalCtx) throw new Error("Canvas 2D context unavailable");
  finalCtx.drawImage(scratch, 0, 0, CARD_WIDTH, finalHeight, 0, 0, CARD_WIDTH, finalHeight);

  return new Promise((resolve, reject) => {
    final.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Failed to render result card"));
    }, "image/png");
  });
}
