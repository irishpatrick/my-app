
export class Util
{
    static rad(deg: number)
    {
        return deg * (Math.PI / 180.0);
    }

    static deg(rad: number)
    {
        return rad * (180.0 / Math.PI);
    }
}