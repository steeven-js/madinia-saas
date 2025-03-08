import { useMemo } from 'react';

// @third-party
import useSWR, { mutate } from 'swr';

// @types
import { MenuProps } from 'src/types/menu';

const initialState: MenuProps = {
    openedItem: '',
    isDashboardDrawerOpened: false
};

export const endpoints = {
    key: 'api/menu',
    master: 'master'
};

export function useGetMenuMaster() {
    // to fetch initial state based on endpoints

    const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    const memoizedValue = useMemo(
        () => ({
            menuMaster: data as MenuProps,
            menuMasterLoading: isLoading
        }),
        [data, isLoading]
    );

    return memoizedValue;
}

export function handlerDrawerOpen(isDashboardDrawerOpened: boolean) {
    // to update `isDashboardDrawerOpened` local state based on key

    mutate(
        endpoints.key + endpoints.master,
        (currentMenuMaster = initialState) => {
            return { ...currentMenuMaster, isDashboardDrawerOpened };
        },
        false
    );
}

export function handlerActiveItem(openedItem: string) {
    // to update `openedItem` local state based on key

    mutate(
        endpoints.key + endpoints.master,
        (currentMenuMaster = initialState) => {
            return { ...currentMenuMaster, openedItem };
        },
        false
    );
}
