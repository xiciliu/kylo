package com.thinkbiganalytics.kylo.exceptions;

/*-
 * #%L
 * kylo-spark-livy-core
 * %%
 * Copyright (C) 2017 - 2018 ThinkBig Analytics, a Teradata Company
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

import com.thinkbiganalytics.spark.shell.SparkShellSaveException;

public class LivyException extends RuntimeException {
    public LivyException() {
        super();
    }

    public LivyException(String s) {
        super(s);
    }

    public LivyException(String s, Throwable throwable) {
        super(s, throwable);
    }

    public LivyException(Throwable cause) {
        super(cause);
    }
}
