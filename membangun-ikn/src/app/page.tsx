import Section from "@/components/dynamic/base-section";
import generateBlocks from "@public/membangun-ikn-mewujudkan-wacana-lama-indonesia/generated-blocks.json";
import { getComponent } from "@/data/component-front";
import { BlockType } from "@/data/types";
import Navbar from "@/components/dynamic/nav-bar";
import Toc from "@/components/dynamic/toc";

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
    <main className="bg-neutral-50 w-full relative">
      <Navbar />
      <Toc />
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
