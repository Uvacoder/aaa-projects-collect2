import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";
import "./styles.css";

export interface Teacher {
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  whatsapp: string;
  id: number;
  subject: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleCrateConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R${teacher.cost}</strong>
        </p>
        <a
          onClick={handleCrateConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
          type="button"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
