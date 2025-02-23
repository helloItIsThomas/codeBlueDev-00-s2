import { walkMap, resolveMapping, parseJsonPath, toString, DRAFTS_PREFIX, getPublishedId, get, jsonPath, studioPathToJsonPath, resolveEditInfo, createEditUrl } from "./_chunks-es/resolveEditInfo.js";
import { jsonPathToStudioPath, studioPath } from "./_chunks-es/resolveEditInfo.js";
const defaultUpdateFunction = (changed) => changed;
function applySourceDocuments(result, resultSourceMap, getCachedDocument, updateFn = defaultUpdateFunction, perspective = "raw") {
  if (!resultSourceMap) return result;
  if (perspective !== "published" && perspective !== "raw" && perspective !== "previewDrafts")
    throw new Error(`Unknown perspective "${perspective}"`);
  return walkMap(JSON.parse(JSON.stringify(result)), (value, path) => {
    const resolveMappingResult = resolveMapping(path, resultSourceMap);
    if (!resolveMappingResult)
      return value;
    const { mapping, pathSuffix } = resolveMappingResult;
    if (mapping.type !== "value" || mapping.source.type !== "documentValue")
      return value;
    const sourceDocument = resultSourceMap.documents[mapping.source.document], sourcePath = resultSourceMap.paths[mapping.source.path];
    if (sourceDocument) {
      const parsedPath = parseJsonPath(sourcePath + pathSuffix), stringifiedPath = toString(parsedPath);
      if (stringifiedPath === "_id")
        return value;
      let cachedDocument;
      if (perspective === "previewDrafts" ? (cachedDocument = getCachedDocument(
        sourceDocument._id.startsWith(DRAFTS_PREFIX) ? sourceDocument : { ...sourceDocument, _id: `${DRAFTS_PREFIX}${sourceDocument._id}}` }
      ), cachedDocument || (cachedDocument = getCachedDocument(
        sourceDocument._id.startsWith(DRAFTS_PREFIX) ? { ...sourceDocument, _id: getPublishedId(sourceDocument._id) } : sourceDocument
      )), cachedDocument && (cachedDocument = {
        ...cachedDocument,
        _id: getPublishedId(sourceDocument._id),
        _originalId: sourceDocument._id
      })) : cachedDocument = getCachedDocument(sourceDocument), !cachedDocument)
        return value;
      const changedValue = cachedDocument ? get(cachedDocument, stringifiedPath, value) : value;
      return value === changedValue ? value : updateFn(changedValue, {
        cachedDocument,
        previousValue: value,
        sourceDocument,
        sourcePath: parsedPath
      });
    }
    return value;
  });
}
function resolvedKeyedSourcePath(options) {
  const { keyedResultPath, pathSuffix, sourceBasePath } = options, inferredResultPath = pathSuffix === void 0 ? [] : parseJsonPath(pathSuffix), inferredPath = keyedResultPath.slice(keyedResultPath.length - inferredResultPath.length), inferredPathSuffix = inferredPath.length ? jsonPath(inferredPath).slice(1) : "";
  return parseJsonPath(sourceBasePath + inferredPathSuffix);
}
function resolveEditUrl(options) {
  const { resultSourceMap, studioUrl } = options, resultPath = studioPathToJsonPath(options.resultPath), editInfo = resolveEditInfo({
    resultPath,
    resultSourceMap,
    studioUrl
  });
  if (editInfo)
    return createEditUrl(editInfo);
}
export {
  applySourceDocuments,
  createEditUrl,
  getPublishedId,
  jsonPath,
  jsonPathToStudioPath,
  parseJsonPath,
  resolveEditInfo,
  resolveEditUrl,
  resolveMapping,
  resolvedKeyedSourcePath,
  studioPath,
  studioPathToJsonPath,
  walkMap
};
//# sourceMappingURL=csm.js.map
