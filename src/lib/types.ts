import type {
	BlurParams,
	FadeParams,
	FlyParams,
	SlideParams,
	ScaleParams,
	DrawParams,
	CrossfadeParams,
	blur,
	fade,
	fly,
	slide,
	scale,
	draw,
	crossfade
} from 'svelte/transition';
import type { SvelteComponent } from 'svelte';
import type * as theme from '$lib/theme';
import type { TooltipPosition, ComponentSize } from './enums';
import type Icon from '@iconify/svelte';
import type { UserProfile } from './molecule';

// Config
export type SvelteAction = (node: HTMLElement, parameters?: unknown) => { destroy?: () => void };

export type ActionConfig<T = unknown> = {
	action: SvelteAction;
	parameters?: T[];
};

export type EventListenerConfig = {
	eventType: string;
	handler: (event: Event) => void;
};

export type TransitionFunction =
	| typeof blur
	| typeof fade
	| typeof fly
	| typeof slide
	| typeof scale
	| typeof draw
	| typeof crossfade;

export type TransitionParams =
	| BlurParams
	| FadeParams
	| FlyParams
	| SlideParams
	| ScaleParams
	| DrawParams
	| CrossfadeParams;

export type TransitionDefinition = {
	transition: TransitionFunction;
	params: TransitionParams;
};

export type TransitionConfig = {
	in?: TransitionDefinition;
	out?: TransitionDefinition;
};

// Props
export type DynamicBehaviorWrapperProps = {
	actions?: ActionConfig[];
	eventListeners?: EventListenerConfig[];
	transition?: TransitionConfig;
};

export type CommonProps = {
	id?: string;
	color?: theme.color.Enum;
	size?: ComponentSize;
	tooltipText?: string;
	borderRadius?: theme.border.BorderRadius;
	containerClasses?: string[];
	alternateTooltipText?: string;
	alternateColor?: theme.color.Enum;
};

// Component Props
export type ButtonProps = {
	icon?: string;
	text?: string;
	alternateIcon?: string;
	alternateText?: string;
};

export type TextProps = {
	text: string;
};

export type TooltipProps = {
	text: string;
	position: TooltipPosition;
};

export type ItemProps = {
	component: typeof SvelteComponent;
	props: ButtonProps | TextProps;
	commonProps: Partial<CommonProps>;
	dynamicBehaviorProps: DynamicBehaviorWrapperProps;
};

export type UserProfileProps = {
	avatarUrl: string;
	toggleUserCardVisibility: (event: MouseEvent) => void;
};

export type UserCardProps = {
	email: string;
	userProfileProps: UserProfileProps;
	menuProps: MenuProps;
};

export type MenuProps = {
	header: ItemProps[];
	body: ItemProps[][];
};

export type BreacrumbItemProps = {
	icon: string;
	name: string;
	commonProps: CommonProps;
	dynamicBehaviorProps: DynamicBehaviorWrapperProps;
}

export type BreacrumbProps = {
	props: BreacrumbItemProps[];
	commonProps: CommonProps;
}

export type ComponentProps =
	| ButtonProps
	| UserProfileProps
	| TextProps
	| TooltipProps
	| UserCardProps
	| ItemProps;
