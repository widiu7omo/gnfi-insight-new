import { blocks } from "@/data/blocks.ts";
import Section from "@/components/base-section.tsx";
import { getComponent } from "@/data/components.ts";
const groupByToMap = <T, Q>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => Q
) =>
  array.reduce((map, value, index, array) => {
    const key = predicate(value, index, array);
    map.get(key)?.push(value) ?? map.set(key, [value]);
    return map;
  }, new Map<Q, T[]>());
function App() {
  const grouped = groupByToMap(blocks, (item) => item.group);
  return (
    <div className="min-h-dvh h-full">
      {Object.keys(Object.fromEntries(grouped)).map((groupName) => {
        console.log(groupName);
        const blocks = [...(grouped.get(groupName)?.values() ?? [])];
        console.log(blocks);
        return (
          <Section key={groupName} id={groupName}>
            <Section.Content>
              {blocks.map((block) => {
                const result = getComponent(block.component);
                return <result.component key={Math.random()} block={block} />;
              })}
            </Section.Content>
          </Section>
        );
      })}
    </div>
  );
}

export default App;
