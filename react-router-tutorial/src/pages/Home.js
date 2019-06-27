import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h2>홈</h2>

            <button onClick={()=>{
                history.push('/about/javascript')
            }}>자바스크립트 이용 이동하기</button>
        </div>
    );
};

export default Home;