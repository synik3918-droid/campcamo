// 네이버 금융 시세 프록시 (서버리스). 브라우저 → 이 함수 → 네이버 → 정리해서 반환.
// CORS·API키 불필요. 국내 6자리 종목코드 기준.
exports.handler = async (event) => {
  const headers = {
    "access-control-allow-origin": "*",
    "content-type": "application/json; charset=utf-8",
    "cache-control": "public, max-age=20",
  };
  const code = (((event.queryStringParameters || {}).code) || "").replace(/\D/g, "");
  if (!/^\d{6}$/.test(code)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "invalid_code" }) };
  }
  try {
    const r = await fetch(`https://m.stock.naver.com/api/stock/${code}/basic`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124.0 Safari/537.36",
        "Referer": `https://m.stock.naver.com/domestic/stock/${code}/total`,
        "Accept": "application/json",
      },
    });
    if (!r.ok) {
      return { statusCode: 502, headers, body: JSON.stringify({ error: "naver_" + r.status }) };
    }
    const d = await r.json();
    const dir = d.compareToPreviousPrice || {};
    const out = {
      code,
      name: d.stockName || code,
      price: d.closePrice || "",
      change: d.compareToPreviousClosePrice || "",
      rate: d.fluctuationsRatio || "",
      up: dir.code === "1" || dir.code === "2",   // 1/2 상승
      down: dir.code === "4" || dir.code === "5", // 4/5 하락
      market: d.stockExchangeType && d.stockExchangeType.name || "",
    };
    return { statusCode: 200, headers, body: JSON.stringify(out) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: String((e && e.message) || e) }) };
  }
};
