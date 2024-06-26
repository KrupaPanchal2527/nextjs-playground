let counter = 1;
export const GET = async () => {
  try {
    console.log("Inside GET Request", counter);

    counter = counter + 1;

    return new Response(JSON.stringify(counter), { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new Response(`Could not process your request`, {
      status: 500,
    });
  }
};

export const dynamic = 'force-dynamic'
