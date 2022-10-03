//메인홈(회원목록)
import React from "react";

const UserView = (props) => {
    return (
        <div>
            <p>{this.props.name}</p>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>

        </div>
    );
}

export default UserView;