import './index.css';

const CategoryItems = ({ data, clickTabItem, isActive }) => {
    const { tabId, displayText } = data;

    const onClickTabItem = () => {
        clickTabItem(tabId);
    };

    const activeTabId = isActive ? 'active-tab' : '';

    return (
        <li className="category-list-item">
            <button type="button" onClick={onClickTabItem} className={`category-button ${activeTabId}`}>
                {displayText}
            </button>
        </li>
    );
};

export default CategoryItems;
