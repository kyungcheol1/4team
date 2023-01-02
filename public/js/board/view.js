console.log("ehoTsi");
const cretereply = document.querySelector("#reply > input");
const query = window.location.search;
const idx = query.split("=")[1];

cretereply.addEventListener("keydown", async (e) => {
    if (e.code === "Enter") {
        const message = {
            content: cretereply.value,
        };
        const respone = await fetch(`http://localhost:3000/board/view/reply?index=${idx}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8",
            },
            redirect: "follow",
            body: JSON.stringify(message),
        });
        if (respone.redirected) window.location.href = `http://localhost:3000/board/view/?index=${idx}`;
    } else {
        return;
    }
});

