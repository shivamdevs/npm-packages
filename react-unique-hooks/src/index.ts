"use client"

import useSize from './hooks/useSize';
import useArray from './hooks/useArray';
import useAsync from './hooks/useAsync';
import useHover from './hooks/useHover';
import useFetch from './hooks/useFetch';
import useScript from './hooks/useScript';
import useToggle from './hooks/useToggle';
import useTimeout from './hooks/useTimeout';
import useDarkMode from './hooks/useDarkMode';
import useDebounce from './hooks/useDebounce';
import useInterval from './hooks/useInterval';
import useOnScreen from './hooks/useOnScreen';
import usePrevious from './hooks/usePrevious';
import useLongPress from './hooks/useLongPress';
import useEffectOnce from './hooks/useEffectOnce';
import useMediaQuery from './hooks/useMediaQuery';
import useWindowSize from './hooks/useWindowSize';
import useGeolocation from './hooks/useGeolocation';
import useRenderCount from './hooks/useRenderCount';
import useTranslation from './hooks/useTranslation';
import useClickOutside from './hooks/useClickOutside';
import useOnlineStatus from './hooks/useOnlineStatus';
import useUpdateEffect from './hooks/useUpdateEffect';
import useDocumentTitle from './hooks/useDocumentTitle';
import useScrollRestore from './hooks/useScrollRestore';
import useEventListener from './hooks/useEventListener';
import useScrollPosition from './hooks/useScrollPosition';
import useCopyToClipboard from './hooks/useCopyToClipboard';
import useDebugInformation from './hooks/useDebugInformation';
import useStateWithHistory from './hooks/useStateWithHistory';
import useDeepCompareEffect from './hooks/useDeepCompareEffect';
import useStateWithValidation from './hooks/useStateWithValidation';
import useStorage, { useLocalStorage, useSessionStorage } from './hooks/useStorage';

const ReactHooks = {
    useSize,
    useArray,
    useAsync,
    useHover,
    useFetch,
    useScript,
    useToggle,
    useStorage,
    useTimeout,
    useDarkMode,
    useDebounce,
    useInterval,
    useOnScreen,
    usePrevious,
    useLongPress,
    useEffectOnce,
    useMediaQuery,
    useWindowSize,
    useGeolocation,
    useRenderCount,
    useTranslation,
    useLocalStorage,
    useOnlineStatus,
    useUpdateEffect,
    useClickOutside,
    useDocumentTitle,
    useScrollRestore,
    useEventListener,
    useScrollPosition,
    useSessionStorage,
    useCopyToClipboard,
    useDebugInformation,
    useStateWithHistory,
    useDeepCompareEffect,
    useStateWithValidation,
};

export default ReactHooks;

export {
    useDebounce,
    useLongPress,
    useEffectOnce,
    useUpdateEffect,
    useClickOutside,
    useDocumentTitle,
    useScrollRestore,
    useEventListener,
    useDeepCompareEffect,
};

export { ErrorHook } from './util';

export { default as useScrollPosition, ScrollPositionHook } from './hooks/useScrollPosition';
export { default as useSize, SizeHook } from './hooks/useSize';
export { default as useArray, ArrayHook } from './hooks/useArray';
export { default as useAsync, AsyncHook } from './hooks/useAsync';
export { default as useHover, HoverHook } from './hooks/useHover';
export { default as useFetch, FetchHook } from './hooks/useFetch';
export { default as useScript, ScriptHook } from './hooks/useScript';
export { default as useToggle, ToggleHook } from './hooks/useToggle';
export { default as useTimeout, TimeoutHook } from './hooks/useTimeout';
export { default as useDarkMode, DarkModeHook } from './hooks/useDarkMode';
export { default as useInterval, IntervalHook } from './hooks/useInterval';
export { default as useOnScreen, OnScreenHook } from './hooks/useOnScreen';
export { default as usePrevious, PreviousHook } from './hooks/usePrevious';
export { default as useMediaQuery, MediaQueryHook } from './hooks/useMediaQuery';
export { default as useWindowSize, WindowSizeHook } from './hooks/useWindowSize';
export { default as useRenderCount, RenderCountHook } from './hooks/useRenderCount';
export { default as useOnlineStatus, OnlineStatusHook } from './hooks/useOnlineStatus';
export { default as useTranslation, TranslationHook, TranslationUseHook } from './hooks/useTranslation';
export { default as useGeolocation, GeolocationHook, GeolocationDataHook } from './hooks/useGeolocation';
export { default as useStateWithValidation, StateWithValidationHook } from './hooks/useStateWithValidation';
export { default as useStateWithHistory, HistoryHook, HistoryOperationHook } from './hooks/useStateWithHistory';
export { default as useCopyToClipboard, CopyToClipboardHook, CopyToClipboardOptionsHook } from './hooks/useCopyToClipboard';
export { default as useDebugInformation, DebugInformationHook, DebugInformationPropHook } from './hooks/useDebugInformation';
export { default as useStorage, useSessionStorage, useLocalStorage, StorageHook, StorageTypeHook } from './hooks/useStorage';