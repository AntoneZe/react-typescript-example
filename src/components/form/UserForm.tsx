import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { addUser, deleteUser, updateUser } from '../../store/action-creator/user';
import { User } from '../../types/crud';

const getUserAsk = (users: User[]): void => {
  const id: string | null = prompt('Введите id пользователя', '');
  const transformedTypeId = id === null ? 0 : +id;
  const res = users.find((el) => el.id === transformedTypeId);
  res === undefined
    ? alert('Пользователь не найден')
    : alert(`${res.id} ${res.name}`);
};

const UserForm: React.FC = () => {
  const { users } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');

  const deleteUserAsk = (): void => {
    const id: string | null = prompt('Введите id пользователя', '');
    if (id === null || '') {
      return;
    }
    if (!users.find(el=> el.id === +id)) {
      alert('Пользователь не найден');
      return;
    }
    dispatch(deleteUser(+id));
  };

  const updateUserAsk = (): void => {
    const id: string | null = prompt('Введите id пользователя', '');
    if (id === null || '') {
      return;
    }
    if (!users.find(el=> el.id === +id)) {
      alert('Пользователь не найден');
      return;
    }
    dispatch(updateUser({id: +id, name: prompt("Введите новое имя", '') || ''}));
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addUser({ name: userName }));
        }}>
        <fieldset>
          <legend>Добавить пользователя</legend>
          <br />
          <label htmlFor='name'>Имя</label>{' '}
          <input
            type='text'
            id='name'
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>Добаваить</button>
          <br />
          <button type='button' onClick={() => updateUserAsk()}>
            Обновить
          </button>
          <br />
          <button type='button' onClick={() => deleteUserAsk()}>
            Удалить
          </button>
          <br />
          <button type='button' onClick={() => getUserAsk(users)}>
            Получить
          </button>
        </fieldset>
      </form>
      {users.length ? (
        <ul>
          {' '}
          {users.map((el) => (
            <li key={el.id}>
              {el.id} - {el.name}
            </li>
          ))}{' '}
        </ul>
      ) : null}
    </>
  );
};

export default UserForm;
