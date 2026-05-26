const base = {
  primary: '#5B8EF5',
  secondary: '#9B6EF3',

  inputBackground: '#1E1E26',
  inputColor: '#D4D4E8',
  inputBorder: '#2E2E3C',

  componentBackground: '#17171E',
  componentBorder: '#25252F',
  componentColor: '#D4D4E8',

  sidebarBackground: '#0D0D12',
  contentBackground: '#13131A',

  dropAreaBackground: '#5B8EF528',
  openBackground: '#1E1E28',
  shadow: '#00000055',
}

export const darkTheme = {
  /**
   * Common
   */
  background: base.sidebarBackground,
  outline: base.primary,
  componentBackground: base.componentBackground,
  componentBorder: base.componentBorder,
  componentColor: base.componentColor,
  dropAreaBackground: base.dropAreaBackground,
  primary: base.primary,

  sidebarBackground: base.sidebarBackground,
  contentBackground: base.contentBackground,

  primary90: `${base.primary}90`,
  primary80: `${base.primary}80`,
  primary70: `${base.primary}70`,
  primary60: `${base.primary}60`,
  primary50: `${base.primary}50`,
  primary40: `${base.primary}40`,
  primary30: `${base.primary}30`,
  primary20: `${base.primary}20`,
  primary10: `${base.primary}10`,

  secondary: base.secondary,
  secondary90: `${base.secondary}90`,
  secondary80: `${base.secondary}80`,
  secondary70: `${base.secondary}70`,
  secondary60: `${base.secondary}60`,
  secondary50: `${base.secondary}50`,
  secondary40: `${base.secondary}40`,
  secondary30: `${base.secondary}30`,
  secondary20: `${base.secondary}20`,
  secondary10: `${base.secondary}10`,

  componentColor90: `${base.componentColor}90`,
  componentColor80: `${base.componentColor}80`,
  componentColor70: `${base.componentColor}70`,
  componentColor60: `${base.componentColor}60`,
  componentColor50: `${base.componentColor}50`,
  componentColor40: `${base.componentColor}40`,
  componentColor30: `${base.componentColor}30`,
  componentColor20: `${base.componentColor}20`,
  componentColor10: `${base.componentColor}10`,

  /**
   * Scroll Bar
   */
  scrollbarThumb: 'rgba(255, 255, 255, 0.1)',
  scrollbarThumbHover: 'rgba(255, 255, 255, 0.18)',
  scrollbarThumbActive: 'rgba(255, 255, 255, 0.3)',

  /**
   * Inputs
   */
  inputBackground: base.inputBackground,
  inputColor: base.inputColor,
  inputBorder: base.inputBorder,

  selectBackground: base.inputBackground,
  selectColor: base.inputColor,
  selectBorder: base.inputBorder,

  textareaBackground: base.inputBackground,
  textareaColor: base.inputColor,
  textareaBorder: base.inputBorder,

  /**
   * Buttons
   */
  buttonBackground: 'transparent',
  buttonColor: '#9090A8',
  buttonHoverBackground: '#FFFFFF0D',
  buttonActiveBackground: '#FFFFFF0D',
  buttonPressedBackground: `${base.primary}22`,
  buttonPressedBorder: `${base.primary}60`,
  buttonPressedColor: base.primary,

  buttonPrimaryBackground: base.primary,
  buttonPrimaryColor: '#FFFFFF',
  buttonPrimaryHoverBackground: '#4A7DE8',
  buttonPrimaryActiveBackground: '#4A7DE8',

  /**
   * In-App Notes
   */
  inAppNoteColor: '#9090A850',
  inAppNoteIconColor: '#9090A8',
  inAppNoteNoProjectsBackground: base.contentBackground,
  inAppNoteNoWorkflowsBackground: base.contentBackground,

  /**
   * Top Bar
   */
  topBarBackground: base.componentBackground,
  topBarBorder: base.componentBorder,

  /**
   * Top Bar - Widget Palette
   */
  paletteBackground: base.componentBackground,
  paletteBorder: `${base.primary}20`,
  paletteShadow: base.shadow,
  paletteNoteColor: '#9090A8',
  paletteTabBackground: `${base.primary}18`,
  paletteTabColor: base.componentColor,
  paletteTabHoverBackground: base.openBackground,
  paletteTabHoverColor: '#FFFFFF',
  paletteSectionBackground: base.openBackground,
  paletteItemBackground: 'transparent',
  paletteItemColor: base.componentColor,
  paletteItemHoverBackground: '#FFFFFF0D',
  paletteItemHoverColor: '#FFFFFF',

  /**
   * Top Bar - Shelf
   */
  shelfDropAreaBackground: base.dropAreaBackground,

  shelfTabColor: '#9090A8',
  shelfTabOpenBackground: base.openBackground,
  shelfTabOpenColor: '#FFFFFF',

  shelfWidgetBoxBackground: base.openBackground,
  shelfWidgetBoxBorder: base.componentBorder,
  shelfWidgetBoxShadow: base.shadow,
  shelfWidgetBoxWidgetBorder: '#2E2E3C',

  /**
   * Workflow Switcher
   */
  workflowSwitcherBackground: base.componentBackground,
  workflowSwitcherBorder: base.componentBorder,
  workflowSwitcherDropAreaBackground: base.dropAreaBackground,

  workflowSwitcherTabBackground: 'transparent',
  workflowSwitcherTabColor: '#9090A8',
  workflowSwitcherTabHoverBackground: '#FFFFFF0D',
  workflowSwitcherTabHoverColor: '#D4D4E8',
  workflowSwitcherTabOpenBackground: `${base.primary}18`,
  workflowSwitcherTabOpenColor: base.primary,

  /**
   * Worktable
   */
  worktableBackground: base.contentBackground,

  widgetLayoutItemBorder: '#22222C',
  widgetLayoutItemEditHoverBorder: '#3C3C50',
  widgetLayoutItemResizingBorder: base.primary,
  widgetLayoutItemResizingOpacity: '0.6',
  widgetLayoutGhostBackground: base.dropAreaBackground,
  widgetLayoutItemShadow: base.shadow,

  /**
   * Modal Screens
   */
  modalScreenBackground: '#1A1A22',
  modalScreenBorder: base.componentBorder,
  modalScreenColor: base.componentColor,

  settingsScreenPanelColor: '#D4D4E8',

  appManagerListBackground: base.componentBackground,
  appManagerListItemBackground: base.componentBackground,
  appManagerListItemColor: base.componentColor,
  appManagerListItemHoverBackground: '#FFFFFF09',
  appManagerListItemHoverColor: '#FFFFFF',
  appManagerListItemSelectedBackground: '#FFFFFF12',
  appManagerListItemSelectedColor: '#FFFFFF',
  appManagerListItemDropAreaBackground: base.dropAreaBackground,

  projectManagerListBackground: base.componentBackground,
  projectManagerListItemBackground: base.componentBackground,
  projectManagerListItemColor: base.componentColor,
  projectManagerListItemHoverBackground: '#FFFFFF09',
  projectManagerListItemHoverColor: '#FFFFFF',
  projectManagerListItemSelectedBackground: '#FFFFFF12',
  projectManagerListItemSelectedColor: '#FFFFFF',
  projectManagerListItemDropAreaBackground: base.dropAreaBackground,

  aboutScreenBorder: base.componentBorder,
  aboutScreenLeftBackground: base.componentBackground,
  aboutScreenLeftColor: base.componentColor,
  aboutScreenRightBackground: '#1A1A22',
  aboutScreenRightColor: base.componentColor,
  aboutScreenRightLinkColor: base.primary,
  aboutScreenLogoColor1: '#2A2A36',
  aboutScreenLogoColor2: '#FFFFFF',
  aboutScreenLogoBorderColor: '#0D0D12',

  /**
   * Widget
   */
  widgetBackground: '#18181F',
  widgetColor: base.componentColor,
  widgetHeaderBackground: '#18181F',
  widgetHeaderBorder: '#22222C',
  widgetHeaderColor: '#9090A8',
}
