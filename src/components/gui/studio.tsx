"use client";
import MainScreen from "@/components/gui/main-connection";
import { ConfigProvider } from "@/context/config-provider";
import { DriverProvider } from "@/context/driver-provider";
import type { BaseDriver } from "@/drivers/base-driver";
import { ReactElement } from "react";
import OptimizeTableState from "@/components/gui/table-optimized/OptimizeTableState";
import { StudioContextMenuItem } from "@/messages/open-context-menu";
import { CollaborationBaseDriver } from "@/drivers/collaboration-driver-base";

export interface StudioExtension {
  contextMenu?: (state: OptimizeTableState) => StudioContextMenuItem[];
}

interface StudioProps {
  driver: BaseDriver;
  collaboration?: CollaborationBaseDriver;
  name: string;
  color: string;

  onBack?: () => void;
  sideBarFooterComponent?: ReactElement;

  theme?: "dark" | "light";
  onThemeChange?: (theme: "dark" | "light") => void;

  extensions?: StudioExtension[];
}

export function Studio({
  driver,
  collaboration,
  name,
  color,
  extensions,
  sideBarFooterComponent,
  onBack,
}: Readonly<StudioProps>) {
  return (
    <DriverProvider driver={driver} collaborationDriver={collaboration}>
      <ConfigProvider
        extensions={extensions}
        name={name}
        color={color}
        onBack={onBack}
        sideBarFooterComponent={sideBarFooterComponent}
      >
        <MainScreen />
      </ConfigProvider>
    </DriverProvider>
  );
}
