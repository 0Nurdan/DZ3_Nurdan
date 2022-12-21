import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Нажми сюда
            </button>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(0)}>
                Обновить счетчик
            </button>
        </div>
    );
}
export default Count;