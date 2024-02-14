import { useState } from "react";

function useAuth() {
    const [loading, setLoading] = useState(false);

    const [todos, setTodos] = useState<null>();

    function check() {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setTodos(json);
                setLoading(false);
            });
    }

    return { check, loading, todos };
}

export default useAuth;
