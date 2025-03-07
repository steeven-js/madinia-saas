import { useContext } from 'react';

// @project
import { ConfigContext } from 'src/contexts/ConfigContext';

// ==============================|| CONFIG - HOOKS ||============================== //

const useConfig = () => useContext(ConfigContext);

export default useConfig;
