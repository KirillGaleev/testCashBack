export function calculateCashBack(regPurchase, elevPurchase, specPurchase) {
    const regPercent = 1;
    const elevPercent = 5;
    const specPercent = 30;
    const regCashBack = regPurchase / 100 * regPercent;
    const elevCashBack = elevPurchase / 100 * elevPercent;
    const specCashBack = specPurchase / 100 * specPercent;
    const CashBack = regCashBack + elevCashBack + specCashBack;
    return CashBack;
}