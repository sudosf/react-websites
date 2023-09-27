
export default function Meme(){
    return (
        <main className="container-fluid">
            <form className="container my-5">
                <div className="mb-3 d-flex">
                    <input type="text" className="form-control me-2 border border-secondary" id="topTextInput" />
                    <input type="text" className="form-control ms-2 border border-secondary" id="bottomTextInput" />
                </div>

                <div className="text-center mt-4 d-grid gap-2">
                    <button className="btn btn-primary btn-lg btn-block" name='submit' type="submit">Get a new image</button>
                </div>
            </form>
        </main>
    );
}