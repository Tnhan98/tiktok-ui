import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h1>Sidebar</h1>
        </aside>
    );
}
