import {NextResponse, type NextRequest} from 'next/server';
import {verifyAccess, type ApiData} from '@vercel/flags';

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if(!access) return NextResponse.json(null, {status: 401});

  return NextResponse.json<ApiData>({
    definitions: {
        newFeature: {
            description: 'Controls weather the new feature is visible',
            origin: '',//optional to specify where the flag is coming from
            options: [
                {value: false, label: 'Disabled'},
                {value: true, label: 'Enabled'},
            ],
        },
    },
  });
}