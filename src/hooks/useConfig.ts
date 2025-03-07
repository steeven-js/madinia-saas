import { useContext } from 'react';

// @project
import { ConfigContext } from 'src/contexts/ConfigContext';
/***************************  HOOKS - CONFIG  ***************************/

export default function useConfig() {
    return useContext(ConfigContext);
}
