import { useEffect, useState } from "react";

const KEY = "hfh-recent";

export function pushRecent(id: string) {
  try {
    const list: string[] = JSON.parse(localStorage.getItem(KEY) || "[]");
    localStorage.setItem(KEY, JSON.stringify([id, ...list.filter((x) => x !== id)].slice(0, 8)));
  } catch { /* ignore */ }
}

export function useRecent() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    try { setIds(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { /* ignore */ }
  }, []);
  return ids;
}
