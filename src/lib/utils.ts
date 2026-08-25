import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's stock scales. Our type scale is
 * custom (text-display, text-body, text-lead …), so out of the box it
 * files those under *text colour* and lets them cancel real colours:
 * `cn("text-background", "text-body")` would drop text-background and
 * leave the label inheriting its parent's colour.
 *
 * Registering the scale under font-size puts each in its own group, so a
 * size and a colour can coexist on the same element.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "headline",
            "title",
            "subtitle",
            "lead",
            "body",
            "body-sm",
            "caption",
            "label",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
