import React from 'react'
import useTheme from '../../context/ThemeSwitcher/theme'

function ThemeBtn() {
    const { themeMode, darkTheme, lightTheme } = useTheme()

    const onChangeBtn = (e) => {
        // const darkModeStatus = e.target.checked;
        // if (darkModeStatus) {
        //     darkTheme()
        // } else {
        //     lightTheme()
        // }
        e.target.checked ? darkTheme() : lightTheme();
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-slate-600 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-slate-900 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-cyan border peer-checked:bg-slate-500"></div>
        </label>
    )
}

export default ThemeBtn