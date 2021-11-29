import React, { useEffect, useState } from 'react';
import client from '../services/apollo.client';
import { GET_JSON_DATA } from '../graphql/query';
import jsonData from '../json';

const JsonData = ({ data }) => {
  const [tailData, setTailData] = useState();

  useEffect(() => {
    if (!jsonData || data.long_tails.length === 0) return;

    const tailId = data.long_tails[0].json_id;
    const payload = jsonData.find((i) => i.id === tailId);
    setTailData(payload);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
      }}
    >
      {!tailData ? (
        <div>No data present</div>
      ) : (
        <div>
          <div>
            <strong>Id:</strong> {tailData.id}
          </div>
          <div>
            <strong>Title:</strong> {tailData.title}
          </div>
          <div>
            <strong>Description:</strong> {tailData.description}
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { data } = await client.query({
    query: GET_JSON_DATA,
    variables: {
      tail: id,
    },
  });

  return {
    props: {
      data,
    },
  };
}

export default JsonData;
