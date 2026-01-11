import { Heading } from "./Heading";
import { Stack } from "./Stack";
import { Text } from "./Text";

export interface TimelineItemProps {
  period: string;
  title: string;
  subtitle?: string;
  works?: string[];
  descriptions?: string[];
}

export const TimeLineItem = ({
  period,
  title,
  subtitle,
  works = [],
  descriptions = [],
}: TimelineItemProps) => {
  return (
    <div className="flex gap-4 md:gap-6">
      {/* 왼쪽-기간 */}
      <Text variant="muted" className="text-sm min-w-[100px] md:min-w-[120px] shrink-0">
        {period}
      </Text>
      {/* 오른쪽-내용 */}
       <Stack gap="2" className="flex-1">
        {/* ✅ Heading 컴포넌트 사용 */}
        <Heading as="h3" size="small">
          {title}
        </Heading>
        
        {subtitle && (
          <Text variant="muted" className="text-sm text-gray-600 font-medium">
            {subtitle}
          </Text>
        )}

        {works.length > 0 && (
          <ul className="mt-1 space-y-1">
            {works.map((work, index) => (
              <li key={index}>
                <Text variant="muted" className="text-sm text-gray-600">
                  - {work}
                </Text>
              </li>
            ))}
          </ul>
        )}
        
        {descriptions.length > 0 && (
          <ul className="mt-1 space-y-1">
            {descriptions.map((desc, index) => (
              <li key={index}>
                <Text variant="muted" className="text-sm text-gray-500">
                  {desc}
                </Text>
              </li>
            ))}
          </ul>
        )}
      </Stack>
    </div>
  );
};
