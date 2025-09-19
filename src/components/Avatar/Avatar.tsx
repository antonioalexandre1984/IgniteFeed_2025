import style from './Avatar.module.css';


interface AvatarProps {
    src: string;
    hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {

    const hasBorder = props.hasBorder ?? true;

    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar} src={props.src} />
    );
}