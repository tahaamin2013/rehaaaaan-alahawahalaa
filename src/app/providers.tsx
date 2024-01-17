"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children}: ProvidersProps) {
	return (
		<NextUIProvider>
			<NextThemesProvider>{children}</NextThemesProvider>
		</NextUIProvider>
	);
}
