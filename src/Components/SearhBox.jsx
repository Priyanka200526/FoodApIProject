import React from 'react'

const SearhBox = ({recipeName,fetchdata,loading,setrecipeName}) => {
    return (
        <>
            {loading && <p>Loading...</p>}
            <div className='container'>
                <input type="text"
                    placeholder='Enter Food Name'
                    value={recipeName}
                    onChange={(e) => setrecipeName(e.target.value)}
                />
                <button onClick={fetchdata} disabled={loading}>{loading ? "Loading..." : "click here"}</button>
            </div>
        </>
    )
}

export default SearhBox