export default function MyResume({ item }) {
  return (
    <div className="resume card mtb15 gap10">
      <a className="resume-pos">{item.position}</a>
      <p>Дата создания: {item.createdAt} </p>
      <div className="statistics">
        <h3>Статистика:</h3>
        <div className="statistics-links d-flex">
          <a href="#">{item.statistics.shows} показов</a>
          <a href="#">{item.statistics.views} просмотров</a>
          <a href="#">{item.statistics.invitations} приглашений</a>
        </div>
      </div>
    </div>
  );
}
