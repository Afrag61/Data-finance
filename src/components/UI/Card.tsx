interface Props {
  className: string;
  middle?: boolean;
  data: {
    image: string;
    title: string;
    price: number;
    storage: string;
    users: number;
    sendUpTo: number;
  };
}

const Card: React.FC<Props> = ({
  className,
  data: { image, title, price, users, storage, sendUpTo },
  middle,
}) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div
      className={`w-full shadow-2xl flex flex-col p-4 rounded-lg hover:scale-105 ${className} ${
        middle ? 'md:my-0 my-8 bg-gray-100' : 'my-4 bg-white'
      }`}
    >
      <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={image} />
      <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
      <p className='text-center text-4xl font-bold'>{formattedPrice}</p>
      <div className='text-center font-semibold '>
        <p
          className={`py-2 ${
            middle ? 'border-gray-200' : 'border-gray-100'
          } border-b mx-8 mt-8`}
        >
          {storage} Storage
        </p>
        <p
          className={`py-2 ${
            middle ? 'border-gray-200' : 'border-gray-100'
          } border-b mx-8`}
        >
          {users > 1 ? `${users} Granted Users` : `${users} Granted User`}
        </p>
        <p
          className={`py-2 ${
            middle ? 'border-gray-200' : 'border-gray-100'
          } border-b mx-8`}
        >
          Send up to {sendUpTo} GB
        </p>
      </div>
      <button
        className={`${className} ${
          middle
            ? 'bg-primary text-black'
            : 'bg-black text-white dark:text-primary'
        }  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:cursor-pointer`}
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
