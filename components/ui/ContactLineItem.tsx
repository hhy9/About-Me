// components/ui/ContactLineItem.tsx

import React from "react";
import { Stack } from "./Stack";
import { Text } from "./Text";

interface ContactLineItemProps {
  label: string;
  link: string;
  href?: string; 
  icon?: boolean
}

export const ContactLineItem = ({
  label,
  link,
  href="",
  icon=false
}: ContactLineItemProps) => {
  return (
    <Stack direction="row" className="items-center gap-4 md:gap-6">
      {/* 왼쪽: 라벨 */}
      <Text
        variant="muted"
        className="text-sm min-w-[100px] md:min-w-[120px] shrink-0"
      >
        {label}
      </Text>

      {/* 오른쪽: 링크 */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between py-3 px-4 -mx-4 rounded-lg hover:transition-all duration-200 group cursor-pointer"
      >
        <Text className="text-sm font-medium text-gray-900 group-hover:underline group-hover:text-black-600 transition-colors">
          {link} {icon && "↗"}
        </Text>
      </a>
    </Stack>
  );
};

ContactLineItem.displayName = "ContactLineItem";
