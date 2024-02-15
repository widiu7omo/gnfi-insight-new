import Section from "@/components/dynamic/base-section";
import generateBlocks from "@public/pemilu-dan-dinamikanya-dari-masa-ke-masa/generated-blocks.json";
import { getComponent } from "@/data/component-front";
import { BlockType } from "@/data/types";

const groupByToMap = <T, Q>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => Q
) =>
  array.reduce((map, value, index, array) => {
    const key = predicate(value, index, array);
    map.get(key)?.push(value) ?? map.set(key, [value]);
    return map;
  }, new Map<Q, T[]>());

export default function Home() {
  const grouped = groupByToMap(generateBlocks, (item) => item.group);
  return (
    <main className="min-h-dvh space-y-8">
      {Object.keys(Object.fromEntries(grouped)).map((groupName) => {
        const blocks = Array.from(grouped.get(groupName)?.values() ?? []);
        return (
          <Section key={groupName} id={groupName}>
            {blocks.map((block) => {
              const result = getComponent(block.component);
              return (
                <result.component
                  key={Math.random()}
                  block={block as BlockType}
                />
              );
            })}
          </Section>
        );
      })}
    </main>
  );
}
