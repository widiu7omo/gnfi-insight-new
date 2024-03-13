import { atom, useAtom } from "jotai";
type NavigationType = {
	show: boolean;
};
const navigationAtom = atom<NavigationType>({ show: false });
export const useNavigation = () => useAtom(navigationAtom);
