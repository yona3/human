import type { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useCallback, useEffect, useMemo } from "react";

const LOCAL_STORAGE_KEY = {
  ["COLOR_SCHEME"]: "human-color-scheme",
} as const;

type ColorSchemeState = {
  colorScheme: ColorScheme;
  setting?:
    | "manual" // 手動で切り替え
    | "system"; // システムの設定に合わせる
};

// TODO: state更新時のエラー修正

export const useColorScheme = () => {
  const defaultValue: ColorSchemeState = {
    colorScheme: "dark",
    setting: "system", // TODO: `/settings`で切り替えできるようにする
  };
  const [colorSchemeState, setColorSchemeState] =
    useLocalStorage<ColorSchemeState>({
      key: LOCAL_STORAGE_KEY["COLOR_SCHEME"],
      defaultValue,
      serialize: (value) => JSON.stringify(value),
    });

  const isDark = useMemo(
    () => colorSchemeState.colorScheme === "dark",
    [colorSchemeState.colorScheme]
  );
  const toggleColorScheme = useCallback(
    (value: ColorScheme) => (value === "light" ? "dark" : "light"),
    []
  );

  // set default value
  useEffect(() => {
    const _defaultValue: ColorSchemeState | null = (() => {
      const storageValue = localStorage.getItem(
        LOCAL_STORAGE_KEY["COLOR_SCHEME"]
      );
      if (storageValue === null || storageValue === "") {
        setColorSchemeState(defaultValue);
        return null;
      }

      const storageColorScheme = (() => {
        try {
          return JSON.parse(storageValue) as ColorSchemeState;
        } catch (_) {
          // JSON.parse()に失敗したらdefaultValueをセット
          return defaultValue;
        }
      })();

      const { colorScheme, setting } = storageColorScheme;

      // setting: "manual"
      if (setting === "manual")
        return {
          colorScheme: colorScheme === "light" ? "light" : "dark",
          setting: "manual",
        };

      // setting: "system" (default)
      const isSystemDarkMord =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      return {
        colorScheme: isSystemDarkMord ? "dark" : "light",
        setting: "system",
      };
    })();

    if (_defaultValue) setColorSchemeState(_defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      setColorSchemeState((prev) =>
        value
          ? {
              ...prev,
              colorScheme: value,
            }
          : {
              ...prev,
              colorScheme: toggleColorScheme(prev.colorScheme),
            }
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    colorScheme: colorSchemeState.colorScheme,
    isDark,
    handleToggleColorScheme,
  };
};
