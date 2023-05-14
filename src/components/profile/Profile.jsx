import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";
import './profile.css'
import '../disk/disk.css'
import '../../utils/input/input.css'

const Profile = () => {
    const dispatch = useDispatch()

    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    return (
        <div className="disk">
            <div className="disk__btns">
                <button className="disk__back" onClick={() => dispatch(deleteAvatar())}>Удалить аватар</button>
                <input className="disk__back" accept="image/*" onChange={e => changeHandler(e)} type="file" placeholder="Загрузить аватар"/>
            </div>
        </div>

    );
};

export default Profile;