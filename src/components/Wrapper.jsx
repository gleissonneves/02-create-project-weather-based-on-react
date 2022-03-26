import React from "react";

const styleGap = {
    padding: "50px"
};


const Wrapper = function wrapper(props) {
    return (
        <main style={styleGap}>
            { props.children }
        </main>
    );
}

export default Wrapper;
