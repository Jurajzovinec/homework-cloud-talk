class MemoryUsage {

    static buildMemoryUsageTable() {
        let memoryUsageTable = [];
        const usedMemoryUsage = process.memoryUsage();
        for (let key in usedMemoryUsage) {
            memoryUsageTable.push({
                whatUsed: key,
                usageInMb: `${Math.round(usedMemoryUsage[key] / 1024 / 1024 * 100) / 100} MB.`
            });
        }
        return memoryUsageTable;
    }

}

module.exports = MemoryUsage;