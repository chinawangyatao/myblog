import React, {} from 'react';
import {Button} from "antd";

const Index = () => {
    return (
        <>
            <div className={"container mx-auto"} style={{backgroundImage:'linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);'}}>
                <h1 className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                    Hello world!
                </h1>
                <Button type={"primary"}>ces</Button>
            </div>

        </>
    );
};

export default Index;
