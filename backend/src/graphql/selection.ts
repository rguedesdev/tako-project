import type { GraphQLResolveInfo, SelectionSetNode } from "graphql";

function selectedFieldNames(info: GraphQLResolveInfo) {
  const fields = new Set<string>();
  const visitedFragments = new Set<string>();

  const collect = (selectionSet?: SelectionSetNode) => {
    for (const selection of selectionSet?.selections ?? []) {
      if (selection.kind === "Field") {
        fields.add(selection.name.value);
      } else if (selection.kind === "InlineFragment") {
        collect(selection.selectionSet);
      } else if (!visitedFragments.has(selection.name.value)) {
        visitedFragments.add(selection.name.value);
        collect(info.fragments[selection.name.value]?.selectionSet);
      }
    }
  };

  for (const fieldNode of info.fieldNodes) collect(fieldNode.selectionSet);
  return fields;
}

function selectionHasField(info: GraphQLResolveInfo, fieldName: string) {
  return selectedFieldNames(info).has(fieldName);
}

export { selectedFieldNames, selectionHasField };
