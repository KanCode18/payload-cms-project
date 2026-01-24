

export function getBlockByType(blocks: any[], type: string) {
  return blocks?.find((block) => block.blockType === type);
}

export function getBlocksByType(blocks: any[], type: string) {
  return blocks?.filter((block) => block.blockType === type) || [];
}