// import './index.css';

const CategoryItems = (props) => {
    const { data, clickTabItem, isActive } = props
    const { tabId, displayText } = data;

    const onClickTabItem = () => {
        clickTabItem(tabId);
    };

    const activeTabId = isActive ? 'bg-black text-white hover:text-white' : 'bg-gray-200';

    return (
        <li className="list-none">
            <button type="button" onClick={onClickTabItem} className={`border-0 py-3 px-3 rounded-xl text-sm cursor-pointer text-gray-600 font-semibold hover:text-gray-900 ${activeTabId}`}>
                {displayText}
            </button>
        </li>
    );
};

export default CategoryItems;
